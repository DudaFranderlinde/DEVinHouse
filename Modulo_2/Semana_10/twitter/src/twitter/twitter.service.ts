import { Inject, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { Repository } from "typeorm";
import { CreateTweetDTO } from "./dto/createTweets.dto";
import { CreateUserDTO } from "./dto/createUser.dto";
import { TweetEntity } from "./entities/tweet.entity";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class TwitterService{
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<UserEntity>,
        @Inject('TWEET_REPOSITORY')
        private tweetRepository: Repository<TweetEntity>
    ){}

    async createUser(createUser: CreateUserDTO){
        return new Promise(async (resolve, reject) => {
            try {
                const { name, username, fotoURL, email, password} = createUser;

                const user = this.userRepository.create();
                user.name= name;
                user.username = username;
                user.fotoURL = fotoURL;
                user.email = email;
                user.salt = await bcrypt.genSalt();
                user.password = await this.hashPassword(password, user.salt)

                const userCreated = await this.userRepository.save(user);
                delete user.password;
                delete user.salt;
                resolve(userCreated);
            } catch (error) {
                reject(error)
            }
        })

    }

    async createTweet(createTweet: CreateTweetDTO, idUser:number){
        return new Promise(async(resolve, reject) => {
            try {
                const {text} = createTweet;
                const tweet = await this.tweetRepository.create()
                tweet.text = text
                tweet.user.id = idUser

                const tweetCreated = await this.tweetRepository.save(tweet)
                resolve(tweetCreated)
            } catch (error) {
                reject(error)
            }
        })
    }

    async findAll(){
        return new Promise(async(resolve, reject) => {
            try {
                const tweets = await this.tweetRepository.find();
                resolve(tweets)
            } catch (error) {
                reject(error)
            }
        })
    }

    
    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}