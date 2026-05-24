import { Submit } from "../../entities/Submit";
import { Activitie } from "../../entities/Activitie";
import { User } from "../../entities/User";
import { Request, Response } from "express";
import { Connection } from "../../database/dataBase";

export class StudentSubmitController{
    static async createSubmit(req: Request, res: Response){
        try{
            
            const { IdActivitites, SubSenteAt } = req.body;

            if( !IdActivitites || !SubSenteAt){
                return res.status(400).json({status: false, msg: 'Todos os campos devem estar preenchidos'})
            }

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }
}