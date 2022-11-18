import { Injectable, ConflictException } from '@nestjs/common'
import { Database } from 'src/database/database';
import { Cerveja } from './cerveja.entity';
import { v4 as uuidV4 } from 'uuid'

@Injectable()
export class CervejaService {
    constructor(private database: Database) {}

    public async criarCerveja(cerveja: Cerveja){
        const cervejas = await this.database.getCervejas()
        const findCerveja = cervejas.find(elemento => elemento.nome.toLowerCase() == cerveja.nome.toLowerCase())
        if(findCerveja){
            throw new ConflictException({
                statusCode: 409,
                message: 'O nome dessa cerveja já foi utilizado.'
            })
        }

        cerveja.id = uuidV4()

        await this.database.salvarCerveja(cerveja);
        return cerveja;

    }

    public async buscarCervejas(page: number, size: number){
        const indiceInicial = page * size;
        const indiceFinal = indiceInicial + size;

        const cervejas = await this.database.getCervejas();
        if (cervejas.length > indiceInicial) {
        if (cervejas.length > indiceFinal) {
            return cervejas.slice(indiceInicial, indiceFinal);
        } else {
            return cervejas.slice(indiceInicial, cervejas.length);
        }
        } else {
        return [];
        }   
    }

    public async buscarDetalhes(id: string){
        const cervejas = await this.database.getCervejas();
        return cervejas.find(
            elemento => elemento.id == id,
        );
    }
}