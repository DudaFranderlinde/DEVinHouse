import { Type } from "class-transformer";
import { IsNotEmpty, IsEmail, IsOptional, IsPhoneNumber, IsString, ValidateNested, MinLength } from "class-validator";
import { Match } from "src/core/constraints/match.decorator";
import { CreateAddressDto } from "./createAddress.dto";

export class CreateUserDTO{
    @IsNotEmpty()
    @IsString()
    readonly nome:string;

    @IsOptional()
    @IsString()
    readonly fotoURL:string | null;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly senha:string;

    @IsNotEmpty()
    @Match("senha", {message: "confirmaSenha should be equal to senha"})
    readonly confirmaSenha:string;

    @IsOptional()
    @IsPhoneNumber('BR')
    readonly telefone:string | null;

    @ValidateNested()
    @Type(()=> CreateAddressDto)
    @IsNotEmpty()
    endereco: CreateAddressDto;

    @ValidateNested()
    @Type(()=> CreateAddressDto)
    dispositivos: CreateAddressDto;

}