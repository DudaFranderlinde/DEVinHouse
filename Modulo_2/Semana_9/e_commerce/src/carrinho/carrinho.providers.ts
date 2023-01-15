import { ProdutosEntity } from 'src/produtos/entities/produtos.entity';
import { DataSource } from 'typeorm';
import { CarrinhoEntity } from './entities/carrinho.entity';

export const carrinhoProviders = [
  {
    provide: 'CARRINHO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CarrinhoEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'PRODUTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ProdutosEntity),
    inject: ['DATA_SOURCE'],
  }
]