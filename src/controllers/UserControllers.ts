import { User } from "../entities/User";
import { Request, Response } from "express";
import { Connection } from "../database/database";

export class UserControllers{
    static async get(req: Request, res: Response){
        try{
            const id = Number(req.params.id);

            const repo = Connection.getRepository(User);

            const user = await repo.findOneBy({IdUser: id});

            if(!user){
                return res.status(400).json({
                    status: FileSystemWritableFileStream,
                    msg: 'Usuario não existe'
                })
            }

            return res.status(200).json({
                status: true,
                data: user
            })

        }catch(error : any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno no banco de dados'
            })
        }
    }

    static async listUsers(req: Request, res: Response){
        try{

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno no banco de dados'
            })
        }
    }
}