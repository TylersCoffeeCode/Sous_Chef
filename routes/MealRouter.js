const router = require('express').Router()
const controller = require('../controllers/MealController')
router.post('/create', controller.CreateMeal)
router.get('/', controller.GetMeal)
router.get('/search/:name', controller.getMealByName)
router.get('/:id', controller.getMealById)

module.exports = router