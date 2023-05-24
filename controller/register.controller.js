
const { createOneUser } = require('../services/user.service')
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')

const userRegister = async(req, res) =>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  try {
    const userData = req.body
    const salt = bcrypt.genSaltSync(10)
    userData.password = bcrypt.hashSync(userData.password, salt) 
    const resp = await createOneUser(userData)
    res.status(201).json(resp)  
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  userRegister
}