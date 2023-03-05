import { Injectable, Inject } from "@nestjs/common";
import { UserEntity } from "src/usuarios/entities/usuario.entity";
import { Repository } from "typeorm";
import { DispositivosEntity } from "../entities/dispositivo.entity";

@Injectable()
export class DevicesService{
    constructor(
        @Inject('DEVICES_REPOSITORY')
        private deviceRepository: Repository<DispositivosEntity>,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<UserEntity>
    ){}

   async findOne(id: number): Promise<DispositivosEntity> {
    return new Promise( async(resolve, reject) => {
        try {
            const findDevice = await this.deviceRepository.findOne({
                where: {
                    id: id
                }
                
            })
            delete findDevice.local
            resolve(findDevice)
        } catch (error) {
            reject(error)
        }
    })
   }

   async findAll(local: string, idUser: number): Promise<DispositivosEntity[]>{
    return new Promise(async (resolve, reject) => {
        try {
                const devices = await this.deviceRepository.find({
                where:{
                    usuario:{
                        id: idUser
                    },
                }
            })

            const filtro = devices.filter(elemento=> elemento.local.toLocaleLowerCase().includes(local.toLocaleLowerCase()) )
            resolve(filtro)

        } catch (error) {
            reject(error)
        }
    })
   }

   async addDevice(local: string, idUser: number, idDevice: number){
    return new Promise(async(resolve, reject) => {
        try {
             const user = await this.userRepository.findOne({
                where:{
                    id: idUser
                },
                relations:{
                    dispositivos: true
                }
            })
            
            const device = await this.deviceRepository.findOne({
                where:{
                    id: idDevice
                },
                relations:{
                   usuario : true
                }
            })

            device.local = local;

            user.addDispositivos(device)
            await this.userRepository.save(user)
            await this.deviceRepository.update(idDevice, {usuario:user})

            resolve(true)

        } catch (error) {
            reject(error)
        }
    })
   }
}
