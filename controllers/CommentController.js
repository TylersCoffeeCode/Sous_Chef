const {Comment} = require('../models')

const CreateComment = async (req,res) => {
  try{
    const comment = await Comment.create({...req.body})
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    const comment = await Comment.update(
      { ...req.body },
      { where: { id: req.params.comment_id }, returning: true }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.comment_id } })
    res.send({ msg: 'Comment Removed', payload: req.params.comment_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}


module.exports = {
  CreateComment,
  UpdateComment,
  DeleteComment,
  GetComments
}