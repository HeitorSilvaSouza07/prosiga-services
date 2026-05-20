import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Permission } from "./Permission";

@Entity('tblUserPermission')
export class UserPermission{

    @PrimaryGeneratedColumn({type: 'int'})
    IdUp!: number;

    @Column({type: 'int'})
    IdUser!: number;

    @Column({type: 'int'})
    IdPermission!: number;

    @ManyToOne(() => User, (user)=> user.IdUser)
    user!: User;

    @ManyToOne(() => Permission, (permission) => permission.IdPer)
    permission!: Permission;
}