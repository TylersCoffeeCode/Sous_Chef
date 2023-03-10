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
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cook_time: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      cuisine: {
        type: Sequelize.STRING,
        allowNull: true
      },
      diet_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ingredients: {
        type: Sequelize.TEXT('long'),
        allowNull: true
      },
      meal_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meals');
  }
};