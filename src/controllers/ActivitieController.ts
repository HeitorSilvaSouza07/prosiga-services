import e, { Request, Response } from "express";
import { Connection } from "../database/database";
import { Activitie } from "../entities/Activitie";

export class ActivitieController{

    public static async get(req: Request, res: Response){
        try{
            const id = Number(req.params.id)

            const repo = Connection.getRepository(Activitie)
            const activitie = await repo.findOneBy({IdActivities: id})

            if(!activitie){
                return res.status(400).json({
                    status: false,
                    msg: 'usuario não entrado'
                })
            }

            return res.status(200).json({
                status: true,
                msg:'usuario encontrado com sucesso',
                data: activitie
            })

        }catch(error){
            console.error(error)
            return res.status(500).json({
                status: false,
                msg: 'erro na conexão com o banco de dados'
            })
        }
    }

    public static async listActivities(req: Request, res: Response){
        try{
            const repo = Connection.getRepository(Activitie)
            const activitie = await repo.find()

            if(!activitie){
                return res.status(400).json({
                    status: false,
                    msg: 'usuarios não entrado'
                })
            }
            
            return res.status(200).json({
                status: true,
                msg: 'usuario encontrado com sucesso',
                data: activitie
            })
    
        }catch(error){
            console.log(error)
            return res.status(500).json({
                status: false,
                msg: "Erro na conexão com o banco de dados"
            })
        }
    }

    public static async create(req: Request, res: Response){
        try{
            
        }catch(error){
            console.log(error)
            return res.status(500).json({
                status: false, 
                msg: "Erro na conexão com o banco de dados"
            })
        }
    }

    public static async update(req: Request, res: Response){
        try{

        }catch(error){
            console.error(error)
            return res.status(500).json({
                status: false, 
                msg: 'Erro na conexão com o banco de dados'
            })
        }
    }

    public static async delete(req: Request, res: Response){
            try{

            }catch(error){
                console.log(error)
                return res.status(500).json({
                    status: false,
                    msg: 'erro na conexão como banco de dados'
                })
            }
        }
}