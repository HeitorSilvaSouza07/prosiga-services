import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Activitie } from "./Activitie";

@Entity('tblClass')
export class Class{
    @PrimaryGeneratedColumn()
    IdClass!: number;

    @Column({ type: 'int' })
    ClassPeriod!: number;

    @Column({ type: 'nvarchar', length: 255 })
    ClassCurso!: string;
    
    @OneToMany (() => Activitie, (activitie) => activitie.classe)
    activities!: Activitie[];

}