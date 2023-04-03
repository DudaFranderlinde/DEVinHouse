import { Injectable, Inject } from '@nestjs/common'
import { UserEntity } from '../entities/usuario.entity';
import { Repository } from 'typeorm';
import { FindUserDto } from '../dto/findUser.dto';
import { UpdatePasswordDto } from '../dto/updatePassword.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class UserService{
    constructor(
        private jwtService: JwtService,
        @Inject('USER_REPOSITORY') private userRepository: Repository<UserEntity>){}


    async findMe(id: FindUserDto): Promise<UserEntity> {
        return new Promise(async (resolve, reject)=> {
            try {
                const foundUser = await this.userRepository.findOne({
                    where: id,
                    relations:{
                        endereco: true
                    }
                })

                delete foundUser.id
                delete foundUser.senha
                delete foundUser.salt

                if(foundUser.telefone == null){
                    delete foundUser.telefone
                }

                if (foundUser.endereco.complemento == null) {
                    delete foundUser.endereco.complemento
                }

               resolve(foundUser)
            } catch (error) {
                reject(error)
            }
        })
    }

    async updatePassword(id: number, userUpdtade: UpdatePasswordDto): Promise<boolean>{
        return new Promise(async (resolve, reject) => {
            try {
                const { senhaAtual, senha, email } = userUpdtade
                
                const findUser = await this.userRepository.findOne({
                    where:{
                        id: id
                    }
                })
                
                if(email == findUser.email && await bcrypt.hash(senhaAtual, findUser.salt) == findUser.senha){
                    userUpdtade.senha = await bcrypt.hash(senha, findUser.salt)

                    await this.userRepository.update(id, {senha: userUpdtade.senha})
                    return resolve(true)
                    
                }

                if(findUser == null){
                    resolve(null)
                    return
                }

                resolve(false)
            } catch (error) {
                reject(error)
            }
        })
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
}