import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn({type: 'number'})
    IdUser: number;

    @Column({type: 'string'})
    UserName: string;

    @Column({type: 'string'})
    UserCpf: string;

    @Column({type: 'string'})
    UserType: string;
}