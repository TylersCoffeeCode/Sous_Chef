'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

      User.belongsToMany(models.Meal, {
        foreignKey: 'meal_id',
        through: 'favorites',
        as: 'creator',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      User.belongsToMany(models.Meal, {
        foreignKey: 'user_id',
        through: 'favorites',
        as: 'favorites_list',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      User.hasMany(models.Comment, { 
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    favorites: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
  },
   {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};