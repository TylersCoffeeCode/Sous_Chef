const {Meal} = require('../models')
const middleWare = require('../middleware')


const CreateMeal = async (req,res) => {
  try{
    const meal = await Meal.create({...req.body})
    res.send(meal)
  } catch (error) {
    throw error
  }
}

const getMealByName = async (req, res) => {
  try {
    const mealName = req.params.name
    const meal = await Meal.find({
      name: { $regex: `${mealName}`, $options: 'i' }
    })
    if (meal) {
      return res.status(200).json({ meal })
    }
    return res.status(404).send('Meals with the specified Name does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


const GetMeal = async (req, res) => {
  try {
    const meals = await Meal.findAll()
    res.send(meals)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getMealByName,
  CreateMeal,
  GetMeal
}