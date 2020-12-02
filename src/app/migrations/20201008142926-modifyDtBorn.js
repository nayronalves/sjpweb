'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.changeColumn(
            'Associados',
            'dt_born', {
                type: Sequelize.DATEONLY,
                allowNull: true,
            }
        )
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};