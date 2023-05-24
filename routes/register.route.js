const { Router } = require('express')
const route = Router();
const { userRegister } = require('../controller/register.controller')
const { validateCreate } = require('../validators/validator');


route.post('/register', validateCreate, userRegister )

module.exports= route