import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CreatePayDto } from "../dto/createPay.dto";
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
        return await this.service.addProduto(idCarrinho, idProduto)
    }

    @Post('pagamento')
    async realizarPagamento(@Body() createUser: CreatePayDto){
        return await this.service.realizarPagamento(createUser)
    }

    @Delete('produtos/:id')
    async deleteProduto(@Param('id') id:number){
        return await this.service.deleteProduto(id)
    }
}