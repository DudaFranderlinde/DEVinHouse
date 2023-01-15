import { Controller, Get, HttpStatus, Res, Param } from "@nestjs/common";
import { Response } from "express";
import { ProdutosService } from "../service/produtos.service";

@Controller('produtos')
export class ProdutosController{
    constructor(
        private service: ProdutosService
    ){}

    @Get()
    async findAll(@Res() response: Response){
        const produtos = await this.service.findAll()
        response.status(HttpStatus.OK).send(produtos)
    }

    @Get('/detalhes/:id')
    async findOne(@Param('id') id: number, @Res() response: Response){
        const produto = await this.service.findOne(id)
        if(produto == null){
            response.status(HttpStatus.NOT_FOUND).send({message:`Nenhum usuário encontrado com o ID ${id}`})
        }
        response.status(HttpStatus.OK).send(produto)

    }
}