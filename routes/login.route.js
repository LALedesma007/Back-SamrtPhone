const { Router } = require('express')
const route = Router();
const { userlogin } = require('../controller/login.controller')
const { validateCreate } = require('../validators/validator');

route.post('/login', validateCreate, userlogin )

module.exports= route