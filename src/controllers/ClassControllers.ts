import { Request, Response } from "express";
import { Connection } from "../database/database";
import { Class } from "../entities/Class";

export class ClassControllers{
    public static async get(req: Request, res: Response){
        try{
            const repo = Connection.getRepository(Class)
        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }

    public static async listClass(req: Request, res: Response){
        try{
            const repo = Connection.getRepository(Class)

            const classes = await repo.find()

            return res.status(200).json({
                status: true,
                data: classes 
            })
        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }

    public static async createClass(req: Request, res: Response){
        try{
              const repo = Connection.getRepository(Class)
        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }

    public static async updateClass(req: Request, res: Response){
            try{
                  const repo = Connection.getRepository(Class)
        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }

    public static async deleteClass(req: Request, res: Response){
            try{
                  const repo = Connection.getRepository(Class)
        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }
}