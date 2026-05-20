import { DataSource } from 'typeorm'
import { User } from '../entities/User'
import { Activitie } from '../entities/Activitie'
import { Class } from '../entities/Class'
import { Subject } from '../entities/Subject'
import { Permission } from '../entities/Permission'
import { Submit } from '../entities/Submit'
import { UserPermission } from '../entities/UserPermission'

export const Connection = new DataSource({
    type: 'mssql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 1433,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: true,
    },
    entities: [User, Activitie, Class, Subject, Permission, Submit, UserPermission],
    synchronize: process.env.NODE_ENV !== 'production',
    logging: process.env.NODE_ENV === 'development',
    pool: {
        min: 2,
        max: 10,
    },
})

export async function dbstatus(){
  try {
    return await Connection.initialize();
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
    throw error;
  }
}
