import { Request, Response } from "express";
import { Submit } from "../../entities/Submit";
import { Connection } from "../../database/dataBase";

export class AdministratorSubmitController{
    static async get(req: Request, res: Response){
        try{

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }
}