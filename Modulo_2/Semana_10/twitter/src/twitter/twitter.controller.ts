import { Controller, Body, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateUserDTO } from "./dto/createUser.dto";
import { TwitterService } from "./twitter.service";

@Controller('twitter')
export class TwitterController{
    constructor(
        private service: TwitterService,
    ){}

    @Get('register')
    async create(@Body() createUser: CreateUserDTO, @Res() response: Response){
        const user = await this.service.createUser(createUser)
        response.status(HttpStatus.CREATED).send(user)
    }
}