import { DataSource } from 'typeorm';
import { AddressEntity } from './entities/endereco.entity';
import { UserEntity } from './entities/usuario.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  }, {
    provide: 'ADDRESS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AddressEntity),
    inject: ['DATA_SOURCE'],
  }
];