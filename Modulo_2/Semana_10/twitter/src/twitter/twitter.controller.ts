import { Controller, Body, Get, HttpStatus, Res, Post, Param } from "@nestjs/common";
import { Response } from "express";
import { CreateTweetDTO } from "./dto/createTweets.dto";
import { CreateUserDTO } from "./dto/createUser.dto";
import { TwitterService } from "./twitter.service";

@Controller('twitter')
export class TwitterController{
    constructor(
        private service: TwitterService,
    ){}

    @Post('register')
    async create(@Body() createUser: CreateUserDTO, @Res() response: Response){
        const user = await this.service.createUser(createUser)
        response.status(HttpStatus.CREATED).send(user)
    }

    @Post('tweets/user/:id')
    async createTweets(@Body() text: CreateTweetDTO, @Res() response: Response, @Param('id') id: number){
        const tweet = await this.service.createTweet(text, id)
        response.status(HttpStatus.CREATED).send(tweet)

    }

    @Get('tweets')
    async findAll(@Res() response: Response){
        const tweets = await this.service.findAll()
        response.status(HttpStatus.OK).send(tweets)

    }

    @Get('myTweets')
    async find(){
        
    }
}