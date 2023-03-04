'use strict';
const {User,Meal, sequelize} = require('../models')
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let user = await User.findOne({order:sequelize.random(), raw:true})
    let meals = [
      
      {
        createdby: user.id,
        name: 'Birria Tacos',
        description:'A traditional Mexican dish consisting of stewed meat tacos, tortillas soaked in the fat of the broth, and a side of broth, also known as consomé, for dipping.',
        picture: 'https://bestbeefrecipes.com/wp-content/uploads/2021/07/birria-beef-tacos-hero.jpg',
        cook_time: 3.5,
        cuisine: 'Mexican',
        diet_type: 'Various',
        ingredients: 'Boneless Chuck, Guajillo Peppers, Avocado Oil, Ancho Chiles, White Onion, Garlic, Roma Tomatoes, Bay Leaves, Cumin',
        meal_type: 'Main Course'
      },
      {
        createdby: user.id,
        name: 'Homemade Mac and Cheese',
        description:'A rich and creamy dish consisting of macaroni pasta mixed with a cheesy sauce.',
        picture: 'https://www.momontimeout.com/wp-content/uploads/2018/10/homemade-mac-and-cheese-recipe-titled.jpg',
        cook_time: 1,
        cuisine: 'American',
        diet_type: 'Traditinal',
        ingredients: 'Elbow Macaroni, Olive Oil, Butter, Flour, Whole Milk, Heavy Whipping Cream, Gruyere Cheese, Panko Crumbs, Parmesan, Smoked Paprika',
        meal_type: 'Dinner'
      }
    ]
    await queryInterface.bulkInsert('meals', meals)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meals')
  }
};
