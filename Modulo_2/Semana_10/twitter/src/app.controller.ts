import { Body, Controller,Post, ValidationPipe, UseGuards, Get, Request, HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { AuthService } from './core/auth/auth.service';
import { CredentialsDTO } from './core/auth/dto/credential.dto';
import { GoogleOAuthGuard } from './core/auth/guard/google-oauth.guard';
import { JwtAuthGuard } from './core/auth/guard/jwt-auth.guard';
import { CreateUserDTO } from './twitter/dto/createUser.dto';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }
  @Get('/auth/with-google')
  @UseGuards(GoogleOAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth(@Request() req) {
  }

  @Get('/auth/google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    if (!req.user) {
      return 'Sem usuário retornado do google';
    }

    return {
      mensagem: 'Google Info',
      user: req.user
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/auth/me')
  async me(@Request() req) {
    return req.user;
  }

  @Post('/auth/signup')
  async signUp(@Body(ValidationPipe) createUserDto: CreateUserDTO) {
    const user = await this.authService.signUp(createUserDto);

    if(user == null){
      throw new HttpException(`Informação inválida! Email já cadastrado`, HttpStatus.CONFLICT)
    }
    
    return {
      message: 'Cadastro realizado.'
    }
  }

  @Post('/auth/signin')
  async signIn(@Body(ValidationPipe) credentialsDto: CredentialsDTO) {
    return await this.authService.signIn(credentialsDto);
  }
}