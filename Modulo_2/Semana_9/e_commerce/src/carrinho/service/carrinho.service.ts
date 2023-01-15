import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common/decorators";
import { ProdutosEntity } from "src/produtos/entities/produtos.entity";
import { Repository } from "typeorm";
import { CarrinhoEntity } from "../entities/carrinho.entity";


@Injectable()
export class CarrinhoService{
    constructor(
        @Inject('CARRINHO_REPOSITORY')
        private carrinhoRespository: Repository<CarrinhoEntity>, 
        @Inject('PRODUTOS_REPOSITORY')
        private produtoRepository: Repository<ProdutosEntity>
    ){}

    async compras(usuario: number){
        const total = await this.carrinhoRespository.query(
            `SELECT SUM (produtos.valor) as valor_total,  FROM carrinho INNER JOIN produtos ON carrinho.produtos = produtos.carrinho_id WHERE usuario=${usuario}`
        )
        
        const carrinho = await this.carrinhoRespository.find({
            where:{
                usuario:usuario
            }
        })

        return{
            carrinho:{
                carrinho
            }, valorTotal:{
                total
            }
        }
    }

    async addProduto(idCarrinho: number, idProduto: number){
        const carrinho = await this.carrinhoRespository.findOne({
            where:{
                id: idCarrinho
            },
            relations:{
                produtos: true
            }
        })

        const produto = await this.produtoRepository.findOne({
            where:{
                id: idProduto
            },
            relations:{
               carrinho : true
            }
        })

        carrinho.addProdutos(produto)
        await this.carrinhoRespository.save(carrinho)
        await this.produtoRepository.update(idProduto, {carrinho:carrinho})

    }
}