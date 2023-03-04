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


module.exports = {
  CreateMeal
}