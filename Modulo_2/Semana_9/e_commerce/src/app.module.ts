import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './core/database/database.providers';
import { ProdutosModule } from './produtos/produtos.module';
import { produtosProviders } from './produtos/produtos.providers';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ProdutosModule
  ],
  controllers: [],
  providers: [...databaseProviders, ...produtosProviders],
})
export class AppModule {}
