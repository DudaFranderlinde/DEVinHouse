import { IsNotEmpty, IsString } from "class-validator";

export class EnderecoDto{
    @IsNotEmpty()
    @IsString()
    readonly rua:string;

    @IsNotEmpty()
    @IsString()
    readonly numero:string

    @IsNotEmpty()
    @IsString()
    readonly bairro: string;

    @IsNotEmpty()
    @IsString()
    readonly cidade: string;

    @IsNotEmpty()
    @IsString()
    readonly cep: string;
}