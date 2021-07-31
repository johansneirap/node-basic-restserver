const { Sequelize } = require('sequelize');


const dbName = 'evaluethon_db';
const db = new Sequelize(dbName, 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

module.exports = db;