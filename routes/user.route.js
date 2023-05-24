const { Router } = require('express')
const route = Router();
const {  getAllUsers, getUserId, createAllUsers, editOneUsers, deleteOneUsers } = require('../controller/user.controller');
const { validateCreate } = require('../validators/validator');
const { jwtValidator } = require('../middlewares/jwtValidator');

route.get('/getuser', getAllUsers)

route.get('/getuserbyid/:id', getUserId)

route.post('/createuser', validateCreate, createAllUsers)

route.patch('/edituser/:id', validateCreate,  editOneUsers )

route.delete('/deleteuser/:id',  deleteOneUsers)

module.exports = route