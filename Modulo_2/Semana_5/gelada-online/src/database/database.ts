import { Injectable } from '@nestjs/common'
import { readFile, writeFile } from 'fs/promises';
import { Cerveja } from 'src/cerveja/cerveja.entity';

@Injectable()
export class Database {
    private FILENAME = 'cervejas.json'

    public async getCervejas(){
        const cervejasInFile = await readFile(this.FILENAME, 'utf-8');
        const cervejas = JSON.parse(cervejasInFile);
        return cervejas;
    }

    public async salvarCerveja(cerveja: Cerveja){
        let cervejas = await this.getCervejas();
        if (!cervejas) {
          cervejas = [];
        }
        await writeFile
        (this.FILENAME, JSON.stringify([...cervejas, cerveja]));
    }

    public async salvarListaCervejas(cervejas: Cerveja[]){
        await writeFile(this.FILENAME, JSON.stringify(cervejas));
    }
}