import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProdutosEntity } from "../entities/produtos.entity";

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
}