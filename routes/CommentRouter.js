const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

// router.get('/', controller.GetCommentByMealId)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)
router.put(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComment
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)

module.exports = router