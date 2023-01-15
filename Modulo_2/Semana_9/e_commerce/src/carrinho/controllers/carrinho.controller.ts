import { Controller, Get, Param, Patch, Query } from "@nestjs/common";
import { CarrinhoService } from "../service/carrinho.service";

@Controller('carrinho')
export class CarrinhoController{
    constructor(
        private service: CarrinhoService
    ){}

    @Get('compras')
    async findCompras(){
        return await this.service.compras(1)
    }

    @Patch('addProduto')
    async addProduto(@Query('carrinho') idCarrinho: number, @Query('produto') idProduto:number ){
        return await this.service
    }
}