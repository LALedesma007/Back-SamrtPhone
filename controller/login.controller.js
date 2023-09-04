const modelUsers = require('../models/users.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { tokenConfig } = require('../config/config')

const userlogin = async(req, res)=>{
  try {
    const { email } = req.body
    const existUser = await modelUsers.findOne({ email })
    if (!existUser) return res.status(404).json({ error: 'Los datos ingresados son incorrectos' })
   

    const paylot = {
      id: existUser._id,
      userName: existUser.userName,
      email: existUser.email,
      role: existUser.role
    }

    const token = jwt.sign(paylot, tokenConfig.secret_token, {
      expiresIn:"7d",
    })


    res.status(200).json({ message: 'Bienvenido', token})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  userlogin
};