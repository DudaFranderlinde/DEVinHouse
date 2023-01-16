import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity({ name: 'users_twitter' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ length: 100 })
    name: string;
  
    @Column({ length: 30 })
    username: string;

    @Column({default: 'https://user-images.githubusercontent.com/83764701/210249786-2b2be989-b7ed-41ee-856f-876dd80030e2.png', name: 'foto_url'})
    fotoURL: string;

    @Column({ length: 50, unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    salt: string;
    
    @OneToMany(() => TweetEntity, (tweet) => tweet.user, { cascade: true })
    tweets: TweetEntity[];
  

    async checkPassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt)
        return hash === this.password;
    }
}