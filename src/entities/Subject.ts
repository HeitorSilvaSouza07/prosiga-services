import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserSubject } from "./UserSubject";

@Entity('tblSubject')
export class Subject{

    @PrimaryGeneratedColumn()
    IdSub!: number;

    @Column({type: 'nvarchar', length: 100})
    SubName!: string;

    @OneToMany(() => UserSubject, (userSubject) => userSubject.subject)
    userSubjects!: UserSubject[];
    
}
