import { Request, Response } from "express";
import { User } from "../../entities/User"
import { Connection } from "../../database/dataBase"
import bcrypt from 'bcrypt'

export class CreateController{
    static async create(req: Request, res: Response){
        try{
            const { UserName, UserCpf, UserType, UserPassword } = req.body
        
            if (!UserName || !UserCpf || !UserType || !UserPassword) {
                return res.status(400).json({
                    status: false,
                    msg: 'Preencha todos os campos'
                })
            }
        
            const lengthCpf = UserCpf.length
        
            if (lengthCpf > 11 || lengthCpf < 11) {
                return res.status(400).json({
                    status: false,
                    msg: 'Cpf deve conter 11 caracteres'
                })
            }
        
            const hashPassword = await bcrypt.hash(String(UserPassword), 10);
        
            const repo = Connection.getRepository(User);
        
            const newUser = repo.create({
                UserName: String(UserName),
                UserCpf: String(UserCpf),
                UserType: String(UserType),
                UserPassword: hashPassword
            });
        
            await repo.save(newUser);
        
            return res.status(201).json({
                status: true,
                msg: 'Usuario criado com sucesso'
            })
        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro ao criar usuário'
            })
        }
    }   
}