import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
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
        return await this.service
    }

    @Post('pagamento')
    async realizarPagamento(@Body() createUser: CreatePayDto){

    }
}