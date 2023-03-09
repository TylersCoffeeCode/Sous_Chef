const router = require('express').Router()
const controller = require('../controllers/MealController')
const middleware = require('../middleware')

router.post('/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateMeal)
router.get('/', controller.GetMeal)
router.get('/search/:name', controller.getMealByName)
router.get('/:cuisine', controller.getMealByCuisine)
router.get('/:id', controller.getMealById)

router.delete('/:id',
middleware.stripToken,
middleware.verifyToken,
controller.DeleteMeal)

router.put('/:id',
middleware.stripToken,
middleware.verifyToken,
controller.EditMeal)

module.exports = router