import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Match } from "src/core/constraints/match.decorator";

export class UpdatePasswordDto{
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly senhaAtual:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    senha:string;

    @Match("senha", {message: "confirmaSenha should be equal to senha"})
    @IsNotEmpty()
    readonly confirmaNovaSenha:string;
}