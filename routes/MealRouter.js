const router = require('express').Router()
const controller = require('../controllers/MealController')

router.post('/create', controller.CreateMeal)
router.get('/', controller.GetMeal)
router.get('/:name', controller.getMealByName)

module.exports = router