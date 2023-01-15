import { IsNotEmpty, IsString, IsDateString, Matches } from "class-validator";

export class PagamentoDto{
    @IsNotEmpty()
    @Matches(/^4[0-9]{12}(?:[0-9]{3})?$/, {message: "cartao must be equal to 4242 4242 4242 4242"})
    cartao:number;

    @IsNotEmpty()
    @IsString()
    nome:string;

    @IsNotEmpty()
    @IsDateString()
    vencimento:string;

    @IsNotEmpty()
    @Matches(/^[0-9]{3, 4}$/, {message: "cvv must be equal to 222"})
    cvv:number
}