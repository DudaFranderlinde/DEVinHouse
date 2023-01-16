import { ForbiddenException, Inject, Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { TweetEntity } from 'src/twitter/entities/tweet.entity';
import { UserEntity } from 'src/twitter/entities/user.entity';
import { CreateUserDTO } from 'src/twitter/dto/createUser.dto';
import { CredentialsDTO } from './dto/credential.dto';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<UserEntity>
        ) {}

    async signUp(createUserDto: CreateUserDTO) {
        return await this.createUser(createUserDto)
    }


    async signIn(credentials: CredentialsDTO) {
        const user = await this.checkCredentials(credentials);
        if (user === null) {
            throw new UnauthorizedException('E-mail e/ou senha incorretos')
        }


        const jwtPayload = {
            id: user.id,
            name: user.name,
            fotoURL: user.fotoURL,
            email: user.email
        }
        const token = await this.jwtService.sign(jwtPayload);
        return { token }
    }

    createUser(createUser: CreateUserDTO){
        return new Promise(async (resolve, reject) => {            
            const { name, email, fotoURL, password } = createUser;

            const checkEmail = await this.userRepository.findOne({
                where: {
                    email: email
                }
            }) 
            
            if(checkEmail !== null){
                resolve(null)
                return
            }
            const user = this.userRepository.create()
            user.name = name;
            user.email = email;
            user.fotoURL = fotoURL;
            user.salt = await bcrypt.genSalt();
            user.password = await this.hashPassword(password, user.salt);
            
            const userCreated = await this.userRepository.save(user);
            delete user.password;
            delete user.salt;
            resolve(userCreated);
        })
    }

    async checkCredentials(credentials: CredentialsDTO) {
        const { email, password } = credentials;
        const user = await this.userRepository.findOne({
            where: {
                email:email,
            }
        })

        if (user && (await user.checkPassword(password))) {   
            return user;
        }
        return null;
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
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