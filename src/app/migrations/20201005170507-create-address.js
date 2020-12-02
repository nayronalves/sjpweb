'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Addresses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING
            },
            zipcode: {
                type: Sequelize.STRING
            },
            neighborhood: {
                type: Sequelize.STRING
            },
            state: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            number: {
                type: Sequelize.STRING
            },
            complement: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Addresses');
    }
};