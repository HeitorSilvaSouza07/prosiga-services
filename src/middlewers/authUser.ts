import { NextFunction, Request, Response } from "express";
import { Connection } from "../database/dataBase";
import { User } from "../entities/User";

export const authUser(){
    export function auth(req: Request, res: Response, next: NextFunction){
        try{

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno na validação de usuarios'
            })
        }
}