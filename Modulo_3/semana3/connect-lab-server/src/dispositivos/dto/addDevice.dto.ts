import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddDeviceDto{
    @IsNotEmpty()
    @IsNumber()
    idDevice: number;

    @IsNotEmpty()
    @IsString()
    local: string;
}