import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Match } from "src/core/constraints/math.decorator";

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
    password:string;

    @Match("password", {message: "confirmaSenha should be equal to senha"})
    @IsNotEmpty()
    readonly confirmaNovaSenha:string;
}