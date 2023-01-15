import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common/decorators";
import { Repository } from "typeorm";
import { CarrinhoEntity } from "../entities/carrinho.entity";


@Injectable()
export class CarrinhoService{
    constructor(
        @Inject('CARRINHO_REPOSITORY')
        private carrinhoRespository: Repository<CarrinhoEntity>
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
}