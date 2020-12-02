'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const moment = require('moment');
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.associado = require("./associado")(sequelize, Sequelize);
db.booking = require("./booking")(sequelize, Sequelize);
db.address = require("./address")(sequelize, Sequelize);

db.associado.hasMany(db.booking);
db.associado.hasMany(db.address);
db.booking.belongsTo(db.associado, { foreignKey: 'AssociadoId' })
db.address.belongsTo(db.associado, { foreignKey: 'AssociadoId' })

db.moment = moment;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;