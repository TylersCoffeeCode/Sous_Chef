'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meal.init({
    createdby: DataTypes.INTEGER,
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    cook_time: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    diet_type: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    meal_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Meal',
    tableName: 'meals'
  });
  return Meal;
};