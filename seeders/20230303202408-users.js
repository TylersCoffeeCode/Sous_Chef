'use strict';
const { hashPassword } = require('../middleware')
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    let users = [...Array(10)].map((_) => ({
      username: falso.randUserName(),
      email: falso.randEmail(),
      password: falso.randPassword(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    await queryInterface.bulkInsert('users', users)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
};
