import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { ProdutosController } from './controllers/produtos.controller';
import { produtosProviders } from './produtos.providers';
import { ProdutosService } from './service/produtos.service';

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [...databaseProviders, ...produtosProviders, ProdutosService],
})
export class ProdutosModule {}
