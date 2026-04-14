import { Entity, PrimaryGeneratedColumn, Column, Collection } from "typeorm";

@Entity('tblClass')
export class Class{
    @PrimaryGeneratedColumn()
    IdClass: number;type: 'number'

    @Column({type: 'number'})
    ClassPeriod: number;

    @Column({type: 'varchar'})
    ClassCurso: string;
    

}