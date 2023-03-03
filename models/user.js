'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Meals, {
        foreignKey: 'meal_id',
        as: 'creator',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      User.hasMany(models.Favorite, {
        foreignKey: 'meal_id',
        as: 'favorites',
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