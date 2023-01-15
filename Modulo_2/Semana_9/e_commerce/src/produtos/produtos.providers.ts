import { DataSource } from 'typeorm';
import { ProdutosEntity } from './entities/produtos.entity';

export const produtosProviders = [
  {
    provide: 'PRODUTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ProdutosEntity),
    inject: ['DATA_SOURCE'],
  }
]