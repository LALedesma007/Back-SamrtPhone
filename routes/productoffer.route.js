const { Router } = require('express');
const route = Router();
const {validateCreateProduct} = require('../validators/validatorproduct.js')
const { jwtValidator } = require('../middlewares/jwtValidator.js');
const { getAllProductOffer, createAllProductOffer, getProductOfferId, editProductOffer, deleteProductOffer,} = require('../controller/productoffer.controller.js');

route.get('/getproductoffer', getAllProductOffer)

route.get('/getproductofferbyid/:id', getProductOfferId)

route.post('/createproductoffer', validateCreateProduct, jwtValidator, createAllProductOffer)

route.patch('/editproductoffer/:id', validateCreateProduct, jwtValidator, editProductOffer )

route.delete('/deleteproductoffer/:id', deleteProductOffer )

module.exports = route