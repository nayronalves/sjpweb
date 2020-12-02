const associadoModel = require("./associado.model");

module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("booking", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        checkin: {
            type: Sequelize.DATE
        },
        checkout: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.STRING
        },
        associado_id: {
            type: Sequelize.INTEGER,
            references: {
                model: associadoModel,
                key: 'id'
            }
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    });

    // Booking.associate = function(models) {
    //     Booking.belongsTo(models.associadoModel, { foreignKey: 'associado_id', as: 'associados' })
    // }

    return Booking;
};