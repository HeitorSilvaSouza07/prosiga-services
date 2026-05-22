import { Request, Response } from "express";
import { Submit } from "../../entities/Submit";
import { Connection } from "../../database/dataBase";
import { Activitie } from "../../entities/Activitie";

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

    static async listByActivitie(req: Request, res: Response){
        try{

            const id = Number(req.params.id);

            const activitie = await Connection.getRepository(Activitie).findOneBy({ IdActivities: id });

            if(!activitie){
                return res.status(404).json({
                    status: false,
                    msg: 'Atividade não existe'
                })
            }

            const repo = Connection.getRepository(Submit);

            const submits = await repo.findBy({ IdActivities: id})

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }
}