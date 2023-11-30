import { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "../../config/database";
import { Dialect, Sequelize } from "sequelize";


const conn : any = {};

const config = {
    dialect: DB_DIALECT as Dialect,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    username: DB_USERNAME,
    password: DB_PASSWORD,
}

const db = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect
});

conn.sequelize = db;
conn.Sequelize = Sequelize;

export const sequelize = db;

// module.exports = conn;