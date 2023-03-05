import { ForbiddenException, Inject, Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/usuarios/entities/usuario.entity';
import { CreateUserDTO } from 'src/usuarios/dto/createUser.dto';
import { Repository } from 'typeorm';
import { CredentialsDTO } from '../dto/credentials.dto';
import { CreateAddressDto } from 'src/usuarios/dto/createAddress.dto';
import { AddressEntity } from 'src/usuarios/entities/endereco.entity';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<UserEntity>,
        @Inject('ADDRESS_REPOSITORY')
        private addressRepository: Repository<AddressEntity>
        ) {}

    async signUp(createUserDto: CreateUserDTO, createAddressDto: CreateAddressDto) {
        if (createUserDto.senha != createUserDto.confirmaSenha) {
            throw new UnprocessableEntityException('As senhas não conferem.')
        }
        return await this.createUser(createUserDto, createAddressDto)
    }


    async signIn(credentials: CredentialsDTO) {
        const user = await this.checkCredentials(credentials);
        if (user === null) {
            throw new UnauthorizedException('E-mail e/ou senha incorretos')
        }

        const primeiroNome = user.nome.split(' ');

        const jwtPayload = {
            id: user.id,
            nome: primeiroNome[0],
            fotoURL: user.fotoURL,
            email: user.email
        }
        const token = await this.jwtService.sign(jwtPayload);
        return { token }
    }

    createUser(createUser: CreateUserDTO, createAddress: CreateAddressDto){
        return new Promise(async (resolve, reject) => {            
            const { nome, email, fotoURL, senha, telefone } = createUser;
            const { cep, logradouro, numero, bairro, cidade, estado, complemento} = createAddress;

            const checkEmail = await this.userRepository.findOne({
                where: {
                    email: email
                }
            }) 
            
            if(checkEmail !== null){
                resolve(null)
                return
            }

            const address = this.addressRepository.create()
            address.cep = cep;
            address.logradouro = logradouro;
            address.numero = numero;
            address.bairro = bairro;
            address.cidade = cidade;
            address.estado = estado;
            address.complemento = complemento;
            const addressCreated = await this.addressRepository.save(address)

            const user = this.userRepository.create()
            user.nome = nome;
            user.email = email;
            user.fotoURL = fotoURL;
            user.salt = await bcrypt.genSalt();
            user.senha = await this.hashPassword(senha, user.salt);
            user.telefone = telefone;
            user.endereco = address;
            
            const userCreated = await this.userRepository.save(user);
            delete user.senha;
            delete user.salt;
            resolve(userCreated);
        })
    }

    async checkCredentials(credentials: CredentialsDTO) {
        const { email, senha } = credentials;
        const user = await this.userRepository.findOne({
            where: {
                email:email,
            }
        })

        if (user && (await user.checkPassword(senha))) {   
            return user;
        }
        return null;
    }

    private async hashPassword(senha: string, salt: string): Promise<string> {
        return bcrypt.hash(senha, salt);
    }

    validateToken(jwtToken: string) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.jwtService.verifyAsync(jwtToken, {
                    ignoreExpiration: false
                }))                
            } catch (error) {
                reject({
                    code: 401,
                    detail: 'JWT expired.'
                })
            }
        })
    }

    decodedToken(jwtToken: string) {
        return this.jwtService.decode(jwtToken);
    }

}