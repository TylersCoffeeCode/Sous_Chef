'use strict';
const { User, Meal, sequelize } = require('../models')
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let meals = [

      {
        createdby: 2000,
        name: 'Banana Pancakes',
        description: 'Fluffy pancakes with mashed bananas and a hint of cinnamon.',
        picture: 'https://static.onecms.io/wp-content/uploads/sites/43/2022/03/20/20334-Banana-Pancakes-mfs__2x3.jpg',
        cook_time: 0.25,
        cuisine: 'American',
        diet_type: 'Vegetarian',
        ingredients: 'Flour, baking powder, salt, milk, egg, mashed bananas, cinnamon',
        meal_type: 'Breakfast'
      },
      {
        createdby: 1000,
        name: 'Birria Tacos',
        description: 'A traditional Mexican dish consisting of stewed meat tacos, tortillas soaked in the fat of the broth, and a side of broth, also known as consomé, for dipping.',
        picture: 'https://bestbeefrecipes.com/wp-content/uploads/2021/07/birria-beef-tacos-hero.jpg',
        cook_time: 3.5,
        cuisine: 'Mexican',
        diet_type: 'Various',
        ingredients: 'Boneless Chuck, Guajillo Peppers, Avocado Oil, Ancho Chiles, White Onion, Garlic, Roma Tomatoes, Bay Leaves, Cumin',
        meal_type: 'Main Course'
      },
      {
        createdby: 3000,
        name: 'Homemade Mac and Cheese',
        description: 'A rich and creamy dish consisting of macaroni pasta mixed with a cheesy sauce.',
        picture: 'https://www.momontimeout.com/wp-content/uploads/2018/10/homemade-mac-and-cheese-recipe-titled.jpg',
        cook_time: 1,
        cuisine: 'American',
        diet_type: 'Traditinal',
        ingredients: 'Elbow Macaroni, Olive Oil, Butter, Flour, Whole Milk, Heavy Whipping Cream, Gruyere Cheese, Panko Crumbs, Parmesan, Smoked Paprika',
        meal_type: 'Dinner'
      },
      {
        createdby: 1000,
        name: 'Oven Chicken Tenders',
        description: 'Crispy fried chicken tenders the whole family will love.',
        picture: 'https://images-gmi-pmc.edge-generalmills.com/3973d54d-0004-4c06-a9d1-0843f3bf3efa.jpg',
        cook_time: 0.5,
        cuisine: 'American',
        diet_type: 'Traditinal',
        ingredients: 'All-Purpose Flour, Egg, Water, Pank Bread Crumbs, Grated Parmesan Cheese, Chicken Tenderloins',
        meal_type: 'Dinner'
      },
      {
        createdby: 3000,
        name: 'French Toast',
        description: 'Golden French Toast',
        picture: 'https://natashaskitchen.com/wp-content/uploads/2021/03/French-Toast-8.jpg',
        cook_time: 0.25,
        cuisine: 'American',
        diet_type: 'Traditinal',
        ingredients: 'Sliced Bread, Eggs, Milk, Vanilla Extract, Salt, Butter',
        meal_type: 'Breakfast'
      },
      {
        createdby: 2000,
        name: 'Spaghetti Bolognese',
        description: 'Classic Italian dish of spaghetti with a hearty meat sauce.',
        picture: 'https://images.eatsmarter.com/sites/default/files/styles/max_size/public/spaghetti-bolognese-original-582182.jpg',
        cook_time: 1,
        cuisine: 'Italian',
        diet_type: 'Traditional',
        ingredients: 'Spaghetti, ground beef, onion, garlic, canned tomatoes, tomato paste, beef broth, red wine, herbs, parmesan cheese',
        meal_type: 'Dinner'
      },

      {
        createdby: 2000,
        name: 'Beef Stir Fry',
        description: 'Quick and easy stir fry with tender beef and vegetables.',
        picture: 'https://thegirlonbloor.com/wp-content/uploads/2019/04/The-best-Beef-stir-fry-3.jpg',
        cook_time: 0.5,
        cuisine: 'Asian',
        diet_type: 'Low Carb',
        ingredients: 'Beef, broccoli, bell pepper, onion, garlic, soy sauce, cornstarch, vegetable oil, sesame oil',
        meal_type: 'Dinner'
      },

      {
        createdby: 3000,
        name: 'Salmon with Roasted Vegetables',
        description: 'Healthy and flavorful dinner with roasted salmon and vegetables.',
        picture: 'https://www.theroastedroot.net/wp-content/uploads/2020/02/one_pan_salmon_and_vegetables_1.jpg',
        cook_time: 0.5,
        cuisine: 'American',
        diet_type: 'Healthy',
        ingredients: 'Salmon fillets, bell peppers, onion, garlic, olive oil, lemon, herbs',
        meal_type: 'Dinner'
      },
      {
        createdby: 1000,
        name: 'Eggs Benedict',
        description: 'Classic brunch dish with poached eggs, Canadian bacon, and hollandaise sauce.',
        picture: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/01/Healthy-Eggs-Benedict-4.jpg',
        cook_time: 0.5,
        cuisine: 'American',
        diet_type: 'Traditional',
        ingredients: 'English muffins, Canadian bacon, eggs, butter, lemon juice, cayenne pepper',
        meal_type: 'Breakfast'
      },

      {
        createdby: 3000,
        name: 'Avocado Toast',
        description: 'Simple and healthy breakfast with mashed avocado on toast.',
        picture: 'https://gimmedelicious.com/wp-content/uploads/2016/07/avocado-toast-7-of-13.jpg',
        cook_time: 0.25,
        cuisine: 'American',
        diet_type: 'Vegetarian',
        ingredients: 'Bread, avocado, lemon juice, salt, pepper, red pepper flakes',
        meal_type: 'Breakfast'
      },
      {
        createdby: 2000,
        name: 'Grilled Cheese Sandwich',
        description: 'The classic grilled cheese sandwich, made with melted cheddar cheese and buttery bread.',
        picture: 'https://www.simplyrecipes.com/wp-content/uploads/2018/01/HT-Grilled-Cheese-600x840.jpg',
        cook_time: 0.15,
        cuisine: 'American',
        diet_type: 'Traditional',
        ingredients: 'Bread, Cheddar Cheese, Butter',
        meal_type: 'Lunch'
      },

      {
        createdby: 1000,
        name: 'Caesar Salad',
        description: 'A classic Caesar salad, made with crisp romaine lettuce, garlic croutons, and a tangy dressing.',
        picture: 'https://www.onceuponachef.com/images/2011/09/Caesar-Salad-760x538.jpg',
        cook_time: 0.25,
        cuisine: 'Italian',
        diet_type: 'Vegetarian',
        ingredients: 'Romaine Lettuce, Garlic Croutons, Parmesan Cheese, Olive Oil, Lemon Juice, Anchovy Paste, Dijon Mustard, Worcestershire Sauce, Salt, Pepper',
        meal_type: 'Lunch'
      },

      {
        createdby: 3000,
        name: 'Tuna Salad Sandwich',
        description: 'A classic tuna salad sandwich, made with chunky tuna, mayo, and celery, served on your choice of bread.',
        picture: 'https://www.simplyrecipes.com/wp-content/uploads/2018/06/Tuna-Salad-Sandwich-LEAD-1.jpg',
        cook_time: 0.1,
        cuisine: 'American',
        diet_type: 'Traditional',
        ingredients: 'Canned Tuna, Mayonnaise, Celery, Onion, Bread',
        meal_type: 'Lunch'
      },

      {
        createdby: 2000,
        name: 'Chicken Caesar Wrap',
        description: 'A delicious wrap filled with grilled chicken, Caesar dressing, romaine lettuce, and Parmesan cheese.',
        picture: 'https://www.simplyrecipes.com/wp-content/uploads/2019/08/Chicken-Caesar-Wrap-LEAD-1.jpg',
        cook_time: 0.25,
        cuisine: 'American',
        diet_type: 'Low-Carb',
        ingredients: 'Grilled Chicken, Caesar Dressing, Romaine Lettuce, Parmesan Cheese, Flour Tortilla',
        meal_type: 'Lunch'
      },
      {
        createdby: 2000,
        name: 'Greek Salad',
        description: 'A fresh and colorful salad made with cucumbers, tomatoes, red onion, feta cheese, and olives, dressed in a simple vinaigrette.',
        picture: 'https://www.simplyrecipes.com/wp-content/uploads/2019/08/Greek-Salad-LEAD-1.jpg',
        cook_time: 0.2,
        cuisine: 'Greek',
        diet_type: 'Vegetarian',
        ingredients: 'Cucumbers, Tomatoes, Red Onion, Feta Cheese, Olives, Olive Oil, Red Wine Vinegar, Dried Oregano, Salt, Pepper',
        meal_type: 'Lunch'
      }

    ]
    await queryInterface.bulkInsert('meals', meals)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meals')
  }
};
