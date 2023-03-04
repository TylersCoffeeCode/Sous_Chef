const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/CommentController')

router.post('/create', controller.CreateComment)
router.delete('/:comment_id', controller.DeleteComment)
router.put('/:comment_id',controller.UpdateComment)
router.get('/', controller.GetComments)

module.exports = router