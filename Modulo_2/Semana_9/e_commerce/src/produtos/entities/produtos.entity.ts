import { CarrinhoEntity } from 'src/carrinho/entities/carrinho.entity';
import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm'
import { CategoriaProdutoEnum } from '../utils/categoriaProduto.enum';

@Entity('produtos')
export class ProdutosEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome:string;

    @Column({type: 'float'})
    valor:number;

    @Column()
    descricao:string;

    @Column({default: true})
    disponivel:boolean;

    @Column({type: 'int'})
    categoria:CategoriaProdutoEnum;

    @ManyToOne(()=> CarrinhoEntity, (carrinho)=> carrinho.produtos)
    @JoinColumn({name:'carrinho_id'})
    carrinho:CarrinhoEntity;
}