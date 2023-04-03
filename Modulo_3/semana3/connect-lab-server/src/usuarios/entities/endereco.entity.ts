import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./usuario.entity";

@Entity('endereco_entity')
export class AddressEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    cep: string;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column({default: null})
    complemento: string;
    
    @OneToOne(()=> UserEntity, (user)=> user.endereco, { cascade: true })
    user_id: UserEntity;
}