const { Booking } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Associado = sequelize.define("associado", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codServ: {
            type: Sequelize.STRING
        },
        nomeServ: {
            type: Sequelize.STRING
        }
    });

    // Associado.associate = function(models) {
    //     Booking.hasMany(models.Booking, { as: 'bookings' })
    // }

    return Associado;
};