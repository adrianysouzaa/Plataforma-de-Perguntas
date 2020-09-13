const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','06061993',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;