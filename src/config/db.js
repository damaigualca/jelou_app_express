import sql from 'mssql';
import { DB_DATABASE, DB_PASSWORD, DB_SERVER, DB_USER } from "../config.js";

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    server: DB_SERVER, 
    database: DB_DATABASE,
    options: {
        encrypt: false, 
        enableArithAbort: true
    }
};

console.log(config);

export const poolPromise = async () => {
    try {
        const pool = await new sql.ConnectionPool(config).connect();
        return pool;
    } catch (error) {
        console.log(error);
    }
}


export { sql };