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
      },
      {
        createdby: user.id,
        name: 'Oven Chicken Tenders',
        description:'Crispy fried chicken tenders the whole family will love.',
        picture: 'https://images-gmi-pmc.edge-generalmills.com/3973d54d-0004-4c06-a9d1-0843f3bf3efa.jpg',
        cook_time: 0.5,
        cuisine: 'American',
        diet_type: 'Traditinal',
        ingredients: 'All-Purpose Flour, Egg, Water, Pank Bread Crumbs, Grated Parmesan Cheese, Chicken Tenderloins',
        meal_type: 'Dinner'
      },
      {
        createdby: user.id,
        name: 'French Toast',
        description:'Golden French Toast',
        picture: 'https://images-gmi-pmc.edge-generalmills.com/3973d54d-0004-4c06-a9d1-0843f3bf3efa.jpg',
        cook_time: 0.25,
        cuisine: 'American',
        diet_type: 'Traditinal',
        ingredients: 'Sliced Bread, Eggs, Milk, Vanilla Extract, Salt, Butter',
        meal_type: 'Breakfast'
      }
    ]
    await queryInterface.bulkInsert('meals', meals)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meals')
  }
};
