import { UserEntity } from 'src/usuarios/entities/usuario.entity';
import { DataSource } from 'typeorm';
import { DispositivosEntity } from './entities/dispositivo.entity';

export const devicesProviders = [
    {
        provide: 'DEVICES_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(DispositivosEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
        inject: ['DATA_SOURCE'],
    }
]