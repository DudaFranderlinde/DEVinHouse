import { Controller, Body, Get, HttpStatus, Res, Post, Param, UseGuards, Patch, Request, HttpException } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "src/core/auth/guard/jwt-auth.guard";
import { CreateTweetDTO } from "./dto/createTweets.dto";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UpdatePasswordDto } from "./dto/updateUser.dto";
import { TwitterService } from "./twitter.service";

@Controller('twitter')
@UseGuards(JwtAuthGuard)
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

    @Get('myTweets/:id')
    async find(@Res() response: Response, @Param('id') id: number){
        const tweets = await this.service.findMyTweets(id)
        response.status(HttpStatus.OK).send(tweets)
    }

    @Get('serach/:hashtag')
    async findHashtag(@Res() response: Response, @Param('hashtag') hashtag: string){
        const tweets = await this.service.findHashtag(hashtag)
        response.status(HttpStatus.OK).send(tweets)
    }
    
    @Get('tweet/user')
    async findTweet(@Res() response: Response, @Param('id') id: number){
        const tweets = await this.service.findTweets(id)
        response.status(HttpStatus.OK).send(tweets)
    }

    @Patch('updatePassword')
    async update(@Request() req, @Body() user: UpdatePasswordDto, @Res() response: Response){
      try {
        const userUpdate = await this.service.updatePassword(req.user.id, user)

        if(userUpdate){
          response.status(HttpStatus.OK).send({message: `Senha atualizada com sucesso!`})
          return 
        }

        if(!userUpdate){
        return response.status(HttpStatus.NOT_FOUND).send({message:`Informações inválidas!`})
        }
        response.status(HttpStatus.NOT_FOUND).send({message:`Nenhum usuário encontrado com o ID ${req.user.id}`})
        
      } catch (error) {
        
        throw new HttpException({ reason: error?.detail }, HttpStatus.BAD_REQUEST)
      }
    }
}