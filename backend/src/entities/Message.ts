import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import Channel from "./Channel";

@Entity()
class Message extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"text",nullable:false})
    nickname:string;

    @Column({type:"text",nullable:false})
    contents:string;

    @ManyToOne(type=>Channel,
                channel=>channel.messages)
    innerChannel: Channel;


    @CreateDateColumn()
    createAt:string;

    @UpdateDateColumn()
    updateAt:string;
}

export default Message;