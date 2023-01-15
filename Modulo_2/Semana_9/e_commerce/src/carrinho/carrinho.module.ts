import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { carrinhoProviders } from './carrinho.providers';
import { CarrinhoService } from './service/carrinho.service';

@Module({
    imports: [],
    controllers: [],
    providers: [...databaseProviders, ...carrinhoProviders, CarrinhoService],
  })
  export class CarrinhoModule {}
  