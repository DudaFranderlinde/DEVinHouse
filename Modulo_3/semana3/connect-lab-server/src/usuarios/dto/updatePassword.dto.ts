import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Match } from "src/core/constraints/match.decorator";
import { UsuariosDocumentantion } from "../documentation";

const {ApiProperty:doc} = UsuariosDocumentantion
export class UpdatePasswordDto{
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @ApiProperty(doc.updatePassword.email)
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @ApiProperty(doc.updatePassword.senhaAtual)
    readonly senhaAtual:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @ApiProperty(doc.updatePassword.senha)
    senha:string;

    @Match("senha", {message: "confirmaSenha should be equal to senha"})
    @IsNotEmpty()
    @ApiProperty(doc.updatePassword.confirmaNovaSenha)
    readonly confirmaNovaSenha:string;
}