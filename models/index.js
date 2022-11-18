const sequelize = require("../connection/connection");
const { Sequelize, DataTypes } = require('sequelize')

sequelize.authenticate()
    .then(() => {
        console.log('connected to database...')
    })
    .catch((err) => {
        console.log(`${err}`)
    })

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require('./User')(sequelize, DataTypes);
db.Payment = require('./Payment')(sequelize, DataTypes);
db.PaymentDetail = require('./PaymentDetail')(sequelize, DataTypes);
db.Validation = require('./Validation')(sequelize, DataTypes);
db.Role = require('./Role')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('re-sync done!');
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = db;