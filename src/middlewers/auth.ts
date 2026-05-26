import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Connection } from "../database/dataBase";
import { User } from "../entities/User";

interface JwtPayload {
  id: number;
  role?: string;
  useAdmin?: boolean;
  [key: string]: any;
}

declare global {
  namespace Express {
    export interface Request {
      user?: {
        id: number;
        role?: string;
        useAdmin?: boolean;
      };
      token?: string;
    }
  }
}

export class AuthUsers {
  static auth() {
    return (req: Request, res: Response, next: NextFunction) => {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ status: false, msg: "Token não fornecido" });
      }

      const token = authHeader.split(" ")[1];

      try {
        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET || "secret"
        ) as JwtPayload;

        req.user = decoded;
        req.token = token;
        return next();
      } catch (error: any) {
        const message = error.name === "TokenExpiredError"
          ? "Token expirado"
          : "Token inválido";
        return res.status(401).json({ status: false, msg: message });
      }
    };
  }

  static authAdmin() {
    return async (req: Request, res: Response, next: NextFunction) => {
      if (!req.token) {
        return res.status(401).json({ status: false, msg: 'Token não enviado' });
      }

      if (!req.user?.id) {
        return res.status(401).json({ status: false, msg: 'Token inválido' });
      }

      const repo = Connection.getRepository(User);
      const user = await repo.findOneBy({ IdUser: req.user.id });

      if (!user) {
        return res.status(404).json({ status: false, msg: 'Usuario não existe' });
      }

      if (!user.UseAdmin) {
        return res.status(403).json({ status: false, msg: 'Usuario não autorizado' });
      }

      next();
    };
  }

  static authTeacher() {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!req.token) {
        return res.status(401).json({ status: false, msg: 'Token não enviado' });
      }

      if (req.user?.role !== 'teacher') {
        return res.status(403).json({ status: false, msg: 'Usuario não autorizado' });
      }

      next();
    };
  }

  static authStudent() {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!req.token) {
        return res.status(401).json({ status: false, msg: 'Token não enviado' });
      }

      if (req.user?.role !== 'student') {
        return res.status(403).json({ status: false, msg: 'Usuario não autorizado' });
      }

      next();
    };
  }
}
