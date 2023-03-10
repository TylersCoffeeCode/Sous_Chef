'use strict';
const { hashPassword } = require('../middleware')
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {



      const defaultUsers= [{
      id: 1000,
      username: 'Adam2',
      email: 'Adam@email2.com',
      password: falso.randPassword(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2000,
      username: 'Tyler',
      email: 'Tyler@email.com',
      password: falso.randPassword(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3000,
      username: 'Anthony',
      email: 'Anthony@email.com',
      password: falso.randPassword(),
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ]
    const users = [...Array(10)].map((_) => ({
      username: falso.randUserName(),
      email: falso.randEmail(),
      password: falso.randPassword(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    await queryInterface.bulkInsert('users', defaultUsers)
    await queryInterface.bulkInsert('users', users)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
};
