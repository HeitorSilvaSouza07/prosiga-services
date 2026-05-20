import { Permission } from "../../entities/Permission";
import { Request, Response } from "express";
import { Connection } from "../../database/dataBase";

export class PermissionController{
    static async create(req: Request, res: Response){
        try{

            const { PerKey, PerDesc} = req.body;
            
            if(!PerKey || !PerDesc){
                return res.status(400).json({
                    status: false,
                    msg: 'Todos os campos devem estar preenchidos'
                })
            } 
            
            const repo = Connection.getRepository(Permission);

            const permissionExisting = await repo.findOneBy({PerKey: PerKey})

            if(permissionExisting){
                return res.status(400).json({
                    status: false,
                    msg: 'Permissão já existe'
                })
            }

            const permission = repo.create({
                PerKey: PerKey,
                PerDesc: PerDesc
            }) 

            await repo.save(permission);

            return res.status(201).json({
                status: true, 
                msg: 'Permissão criada com sucesso'
            })

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno',
                erro: error
            })
        }
    }

    static async get(req: Request, res: Response){
        try{

            const id = Number(req.params.id);

            const repo = Connection.getRepository(Permission);

            const permission = await repo.findOneBy({ IdPer: id});

            if(!permission){
                return res.status(404).json({
                    status: false,
                    msg: 'Permissão não encontrada'
                })
            }

            return res.status(200).json({
                status: true,
                msg: 'Permissão encontrada',
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