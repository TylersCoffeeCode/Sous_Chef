const {User} = require('../models')

const middlewareWrapper = require('cors')



const Register = async (req, res) => {
  try {
    const { email, password, username } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ email, passwordDigest, username })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Register
}