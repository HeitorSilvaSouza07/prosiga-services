import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('tblPermissios')
export class Permission{

    @PrimaryGeneratedColumn({type: 'int'})
    IdPer!: number;

    @Column({type: 'nvarchar', length: 255})
    PerKey!: number;

    @Column({type: 'nvarchar', length: 1500})
    PerDesc!: string

}