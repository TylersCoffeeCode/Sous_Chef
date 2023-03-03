const {User} = require('../models')
const middleware = require('../middleware')
const middlewareWrapper = require('cors')



const Register = async (req, res) => {
  try {
    const { email, password, username } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ email, password:passwordDigest, username })
    res.send(user)
  } catch (error) {
    throw error
  } 
}

module.exports = {
  Register
}