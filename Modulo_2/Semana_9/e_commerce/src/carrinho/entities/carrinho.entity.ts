import { ProdutosEntity } from 'src/produtos/entities/produtos.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('carrinho')
export class CarrinhoEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default: '1'})
    usuario:number;

    @Column({type:'float'})
    valor: number;

    @OneToMany(()=> ProdutosEntity, (produtos)=> produtos.carrinho, {cascade: true} )
    produtos: ProdutosEntity[]
}