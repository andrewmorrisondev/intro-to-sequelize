'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DogToy extends Model {
    static associate(models) {
      // define association here
    }
  }
  DogToy.init({
    dogId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Dogs',
        key: 'id'
      }
    },
    toyId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Toys',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'DogToy',
  });
  return DogToy;
};