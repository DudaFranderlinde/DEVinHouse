import { IsEmail, IsString, MaxLength, MinLength, IsOptional } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    readonly name:string;

    @IsString()
    @MinLength(3)
    @MaxLength(30)
    readonly username:string;

    @IsOptional()
    @IsString()
    readonly fotoURL:string;

    @IsString()
    @MaxLength(30)
    @IsEmail()
    readonly email:string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    readonly password:string;
}