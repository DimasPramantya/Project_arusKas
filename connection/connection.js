const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_aruskas', 'root', '', { dialect: 'mysql', host: 'localhost', operatorsAliases: false });

module.exports = sequelize;
global.sequelize = sequelize;