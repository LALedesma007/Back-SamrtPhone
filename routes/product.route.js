const { Router } = require('express');
const route = Router();
const {validateCreateProduct} = require('../validators/validatorproduct.js')
const { jwtValidator } = require('../middlewares/jwtValidator');
const{ getAllProduct, getProductId, createAllProduct, editProduct, deleteProduct,} = require('../controller/product.controller');

route.get('/getproduct', getAllProduct)

route.get('/getproductbyid/:id', getProductId)

route.post('/createproduct', validateCreateProduct, createAllProduct)

route.patch('/editproduct/:id', validateCreateProduct, editProduct )

route.delete('/deleteproduct/:id', deleteProduct )

module.exports = route