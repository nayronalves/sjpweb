'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Address extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Address.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        description: DataTypes.STRING,
        zipcode: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
        number: DataTypes.STRING,
        complement: DataTypes.STRING,
        AssociadoId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'associados',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Address',
    });
    return Address;
};