import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProdutosEntity } from "../entities/produtos.entity";
import { CategoriaProdutoEnum } from "../utils/categoriaProduto.enum";

@Injectable()
export class ProdutosService{
    constructor(
        @Inject('PRODUTOS_REPOSITORY')
        private produtoRepository: Repository<ProdutosEntity>
    ){}

    async findAll(){
        const produtos = await this.produtoRepository.find()
        return produtos
    }

    async findOne(id: number){
        const produto = await this.produtoRepository.findOne({
            where: {
                id: id
            }
        })
        return produto
    }

    async findByCategoria(categoria: number){
        const produtos = await this.produtoRepository.find({
            where: {
                categoria:categoria
            }
        })
        return produtos
    }    
   }