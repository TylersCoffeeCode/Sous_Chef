'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdby: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      cook_time: {
        type: Sequelize.STRING
      },
      cuisine: {
        type: Sequelize.STRING
      },
      diet_type: {
        type: Sequelize.STRING
      },
      ingredients: {
        type: Sequelize.STRING
      },
      meal_type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meals');
  }
};