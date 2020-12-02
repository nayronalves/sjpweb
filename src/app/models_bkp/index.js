const
    dbConfig = require("../config/db.config.js"),
    Sequelize = require("sequelize"),
    sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }),
    db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.booking = require("./booking.model.js")(sequelize, Sequelize);
db.associados = require("./associado.model.js")(sequelize, Sequelize);

db.associados.hasMany(db.booking, {
    foreignKey: {
        name: 'id',
        alowNull: false
    }
});

db.booking.belongsTo(db.associados, { foreignKey: 'associado_id' });

module.exports = db;