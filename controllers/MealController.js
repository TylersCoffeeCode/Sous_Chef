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

const getMealByCuisine = async (req, res) => {
  try {
    const cuisine = req.params.cuisine
    const meal = await Meal.findAll({
      where: {cuisine: cuisine}
    })
    if (meal) {
      return res.status(200).json({ meal })
    }
    return res.status(404).send('Meals with the specified Cuisine does not exists')
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

const DeleteMeal = async (req, res) => {
  try {
    await Meal.destroy({ where: { id: req.params.id } })
    res.send({ msg: 'Meal Removed', payload: req.params.id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

const EditMeal = async (req, res) => {
  try {
    const meal = await Meal.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    )
    res.send(meal)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getMealById,
  getMealByName,
  getMealByCuisine,
  CreateMeal,
  GetMeal,
  DeleteMeal,
  EditMeal
}