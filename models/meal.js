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
      Meal.belongsToMany(models.User, {
        foreignKey: 'user_id',
        through: 'favorites',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Meal.belongsToMany(models.User, {
        foreignKey: 'user_id',
        through: 'favorites',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Meal.hasMany(models.Comment, {
        foreignKey: 'meal_id',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Meal.init({
    createdby: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cook_time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuisine: {
      type: DataTypes.STRING,
      allowNull: true
    },
    diet_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: true
    },
    meal_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Meal',
    tableName: 'meals'
  });
  return Meal;
};