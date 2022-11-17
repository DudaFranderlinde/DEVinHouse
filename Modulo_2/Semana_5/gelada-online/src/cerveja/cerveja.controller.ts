import { Controller, Post, Body } from '@nestjs/common'
import { Cerveja } from './cerveja.entity';
import { CervejaService } from './cerveja.service';

@Controller('cervejas')
export class CervejaController {
    constructor(private service: CervejaService) {}

    @Post()
    public async criarCerveja(@Body() body: Cerveja){
        const cerveja = await this.service.criarCerveja(body)
        console.log(cerveja);
        
    }
}