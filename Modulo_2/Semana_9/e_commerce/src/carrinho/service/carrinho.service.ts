import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common/decorators";
import { readFile, writeFile } from "fs/promises";
import { ProdutosEntity } from "src/produtos/entities/produtos.entity";
import { Repository } from "typeorm";
import { CreatePayDto } from "../dto/createPay.dto";
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

    async realizarPagamento(newCompra: CreatePayDto){
        const compras = await this.getCompras()
        await writeFile('comprasFeitas.json', JSON.stringify([...compras, newCompra]));
    }

    async getCompras(){
        const comprarInFile = await readFile('comprasFeitas.json', 'utf-8');
        const compras = JSON.parse(comprarInFile);
        return compras;
    }

    async deleteProduto(idProduto: number){
        const produto = await this.produtoRepository.findOne({
            where:{
                id: idProduto
            }
        })
        const carrinho = await this.carrinhoRespository.find({
            where:{
                id: produto.carrinho.id
            },relations:{
                produtos:true
            }
        })
        const deleteProduto = carrinho.filter((elemento)=>  {
            if(elemento.produtos.includes(produto)){
                delete elemento.produtos
            }
        }) 

        await this.carrinhoRespository.save(carrinho)

    }
}