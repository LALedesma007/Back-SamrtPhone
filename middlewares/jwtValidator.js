const jwt = require('jsonwebtoken')
const { tokenConfig } = require('../config/config')

const jwtValidator = async(req, res, next) => {
  try {
    const token = req.headers['access-token']
    if(!token) return res.status(400).json({ error: 'Token inexistente' })
    jwt.verify(token, tokenConfig.secret_token, (error)=>{
      if(error) return res.status(403).json({ error: 'Token invalido' })
      next()

    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
  
}

module.exports = {
  jwtValidator
}