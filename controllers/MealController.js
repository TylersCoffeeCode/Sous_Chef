const {Meal} = require('../models')
const middleWare = require('../middleware')
const {Op} = require(`sequelize`)

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
    const meal = await Meal.findAll({
      where: {name: {[Op.iLike]: `%${mealName}%`}}
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

const getMealById = async (req, res) => {
  try {
    const { id } = req.params
    const meal = await Meal.findByPk(id)
    if (meal) {
      return res.status(200).json({ meal })
    }
    return res.status(404).send('Meals with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getMealById,
  getMealByName,
  CreateMeal,
  GetMeal
}