import { Permission } from "../../entities/Permission";
import { Request, Response } from "express";
import { Connection } from "../../database/dataBase";

export class AdministratorPermissionController{

    static async list(req: Request, res: Response){
        try{

            const repo = Connection.getRepository(Permission);

            const permissions = await repo.find();

            if(!permissions){
                return res.status(404).json({
                    status: false,
                    msg: 'Nenhyma permissão encontrada'
                })
            }

            return res.status(200).json({
                status: false,
                msg: 'Permissoes encontradas',
                data: permissions
            })

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }

    static async create(req: Request, res: Response){
        try{
            const { PerKey, PerDesc } = req.body;

            if(!PerKey || !PerDesc){
                return res.status(404).json({
                    status: false,
                    msg: 'Dados incompletos'
                })
            }

            const repo = Connection.getRepository(Permission);

            const permission = repo.create({
                PerKey,
                PerDesc
            })  

            await repo.save(permission);

            return res.status(201).json({
                status: true,
                msg: 'Permissão criada com sucesso',
                data: permission
            })
        }catch(error: any){
            
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }
}