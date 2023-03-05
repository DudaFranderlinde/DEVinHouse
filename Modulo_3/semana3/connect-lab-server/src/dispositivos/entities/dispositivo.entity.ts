import { UserEntity } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity('dispositivos_entity')
export class DispositivosEntity{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    nome:string;

    @Column()
    tipo:string;

    @Column()
    fabricante:string;

    @Column()
    status:string;

    @Column()
    info:string;

    @Column()
    ip:string;

    @Column({name: "endereco_mac"})
    enderecoMAC:string;

    @Column({default: null})
    local:string;

    @ManyToOne(()=> UserEntity, (user)=> user.dispositivos)
    @JoinColumn({name: 'usuario_id'})
    usuario: UserEntity;
}