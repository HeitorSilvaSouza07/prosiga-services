import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tblActivities')
export class Activities{
    @PrimaryGeneratedColumn()
    IdActivities: number;
    
    @Column()
    name: string;
}