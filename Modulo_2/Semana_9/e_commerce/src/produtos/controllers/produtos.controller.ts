import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
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
}