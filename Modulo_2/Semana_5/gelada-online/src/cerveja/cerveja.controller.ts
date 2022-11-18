import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common'
import { get } from 'http';
import { Cerveja } from './cerveja.entity';
import { CervejaService } from './cerveja.service';

@Controller('cervejas')
export class CervejaController {
    constructor(private service: CervejaService) {}

    @Post()
    public async criarCerveja(@Body() body: Cerveja){
        const cerveja = await this.service.criarCerveja(body)
        return cerveja;
    }

    @Get()
    public async buscarCervejas(@Query('page') page = 0, @Query('size') size = 10){
        return await this.service.buscarCervejas(page, size)
    }

    @Get(':id')
    public async buscarDetalhes(@Param('id') id){
        return await this.service.buscarDetalhes(id)
    }

}