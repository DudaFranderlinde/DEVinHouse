import { IsOptional, IsString, Matches, IsNumberString, IsNotEmpty } from "class-validator";

export class CreateAddressDto{
    @IsNotEmpty()
    @Matches(/^[0-9]{5}-[0-9]{3}$/, {message:" cep must be equal to 00000-000" })
    readonly cep: string;

    @IsNotEmpty()
    @IsString()
    readonly logradouro: string;

    @IsNotEmpty()
    @IsNumberString()
    readonly numero: string;

    @IsNotEmpty()
    @IsString()
    readonly bairro: string;

    @IsNotEmpty()
    @IsString()
    readonly cidade: string;

    @IsNotEmpty()
    @IsString()
    readonly estado: string;

    @IsOptional()
    @IsString()
    readonly complemento: string | null;
    
}