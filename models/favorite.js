'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
    }
  }
  Favorite.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    meal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'meals',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Favorite',
    tableName: 'favorites'
  });
  return Favorite;
};