import { IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnderecoDto } from "./endereco.dto";
import { PagamentoDto } from "./pagamento.dto";

export class CreatePayDto{
     readonly id:1

     @IsNotEmpty()
     @IsString()
     readonly nome:string;
     
     @ValidateNested()
     @Type(()=>  EnderecoDto)
     @IsNotEmpty()
     readonly endereco:EnderecoDto;

     @ValidateNested()
     @Type(()=> PagamentoDto)
     @IsNotEmpty()
     pagamento:PagamentoDto
}