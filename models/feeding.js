'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feeding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Feeding.belongsTo(models.Dog, {
        foreignKey: 'dogId',
      })
    }
  }
  Feeding.init({
    name: DataTypes.STRING,
    meal: {
      type: DataTypes.ENUM('Breakfast', 'Lunch', 'Dinner'),
      defaultValue: 'Breakfast'
    },
    dogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Dogs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Feeding',
  });
  return Feeding;
};