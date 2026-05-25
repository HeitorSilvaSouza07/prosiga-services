import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Subject } from "./Subject";

@Entity('tblUserSubject')
export class UserSubject{

    @PrimaryGeneratedColumn({ type: 'int' })
    IdSubUse!: number;

    @Column({ type: 'int' })
    IdUser!: number;

    @Column({ type: 'int' })
    IdSub!: number;

    @ManyToOne(() => User, (user) => user.userSubjects)
    user!: User;

    @ManyToOne(() => Subject, (subject) => subject.userSubjects)
    subject!: Subject;

}
