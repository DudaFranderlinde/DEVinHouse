import { IsString, IsNotEmpty, IsEnum } from "class-validator";
import { tipoCerveja } from "./tipoCerveja.enum";

export class Cerveja {
    @IsString()
    id: string;

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsString()
    @IsNotEmpty()
    nomeCervejaria: string;

    @IsNotEmpty()
    @IsEnum(tipoCerveja)
    tipo: tipoCerveja;
}