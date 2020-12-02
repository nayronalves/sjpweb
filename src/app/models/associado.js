'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Associado extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

        }
    };
    Associado.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
        matricula: DataTypes.STRING,
        email: DataTypes.STRING,
        cpf: DataTypes.STRING,
        rg: DataTypes.STRING,
        dt_born: DataTypes.DATEONLY,
        mat: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Associado',
    });
    return Associado;
};