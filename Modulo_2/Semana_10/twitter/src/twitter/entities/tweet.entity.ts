import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'tweets_twitter' })
export class TweetEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ width: 280 })
    content: string;

    @ManyToOne(() => UserEntity, (user) => user.tweets, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;
}