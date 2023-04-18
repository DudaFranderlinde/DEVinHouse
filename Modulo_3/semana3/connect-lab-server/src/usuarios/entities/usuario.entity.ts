import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import * as bcrypt from 'bcrypt';
import { AddressEntity } from "./endereco.entity";
import { DispositivosEntity } from "src/dispositivos/entities/dispositivo.entity";

@Entity('user_entity')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome:string;

    @Column({default:"https://user-images.githubusercontent.com/83764701/210249786-2b2be989-b7ed-41ee-856f-876dd80030e2.png", name: "foto_url"})
    fotoURL:string;

    @Column({unique: true})
    email:string;

    @Column()
    senha:string

    @Column({ nullable: false })
    salt: string;

    @Column({default:null})
    telefone:string;

    @OneToOne(()=> AddressEntity, (endereco)=> endereco.user_id)
    @JoinColumn({name: 'endereco_id'})
    endereco: AddressEntity;

    @OneToMany(()=> DispositivosEntity, (dispositivo)=> dispositivo.usuario, {cascade: true})
    dispositivos: DispositivosEntity[];

    addDispositivos(dispositivo: DispositivosEntity) {
        if (this.dispositivos == null) {
            this.dispositivos = new Array<DispositivosEntity>();
        }
        this.dispositivos.push(dispositivo);
   
    }
    async checkPassword(senha: string): Promise<boolean> {
        const hash = await bcrypt.hash(senha, this.salt)
        return hash === this.senha;
    }
}