import { Controller, Get } from "@nestjs/common/decorators";
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
}