import { Sequelize, DataTypes } from 'sequelize';
import { configDotenv } from 'dotenv';
configDotenv()
const runner = async ()=>{

    // const sequelize = new Sequelize("postgres://postgres:toor@127.0.0.1:5432/bakery") // Example for postgres
    const sequelize = new Sequelize('bakery', 'postgres', 'toor', {
        host: '127.0.0.1:5432',
        dialect: 'postgres' // 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
      });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    const Item = sequelize.define('items', {
        username: DataTypes.STRING,
        birthday: DataTypes.DATE,
    });
}
export default runner