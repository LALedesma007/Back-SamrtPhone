const modelUsers = require('../models/users.models')
const jwt = require('jsonwebtoken')
const { tokenConfig } = require('../config/config')

const userlogin = async(req, res)=>{
  try {
    const { userName, email, password } = req.body
    const existUser = await modelUsers.findOne({ userName, email })
    if (!existUser) return res.status(404).json({ error: 'Los datos ingresados son incorrectos' })
    const passwordMatch = bcrypt.compareSync(password, existUser.password)
    if (!passwordMatch) return res.status(404).json({ error: 'Contraseña incorrecta' })

   
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