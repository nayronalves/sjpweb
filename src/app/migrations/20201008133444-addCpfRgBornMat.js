'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('Associados', 'cpf', {
                    type: Sequelize.DataTypes.STRING
                }, { transaction: t }),
                queryInterface.addColumn('Associados', 'rg', {
                    type: Sequelize.DataTypes.STRING,
                }, { transaction: t }),
                queryInterface.addColumn('Associados', 'dt_born', {
                    type: Sequelize.DataTypes.STRING,
                }, { transaction: t }),
                queryInterface.addColumn('Associados', 'mat', {
                    type: Sequelize.DataTypes.STRING,
                }, { transaction: t })
            ]);
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('Associados', 'cpf', { transaction: t }),
                queryInterface.removeColumn('Associados', 'rg', { transaction: t }),
                queryInterface.removeColumn('Associados', 'dt_born', { transaction: t }),
                queryInterface.removeColumn('Associados', 'mat', { transaction: t })
            ]);
        });
    }
};