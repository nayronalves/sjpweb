'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            checkin: {
                type: Sequelize.DATE
            },
            checkout: {
                type: Sequelize.DATE
            },
            AssociadoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'associados',
                        schema: 'sjp_dev'
                    },
                    key: 'id'
                },
                allowNull: false
            },
            status: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Bookings');
    }
};