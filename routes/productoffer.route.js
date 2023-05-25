const { Router } = require('express');
const route = Router();
const {validateCreateProductOffers} = require('../validators/validatorproductoffers')
const { jwtValidator } = require('../middlewares/jwtValidator.js');
const { getAllProductOffer, createAllProductOffer, getProductOfferId, editProductOffer, deleteProductOffer,} = require('../controller/productoffer.controller.js');

route.get('/getproductoffer', getAllProductOffer)

route.get('/getproductofferbyid/:id', getProductOfferId)

route.post('/createproductoffer', validateCreateProductOffers, createAllProductOffer)

route.patch('/editproductoffer/:id', validateCreateProductOffers, editProductOffer )

route.delete('/deleteproductoffer/:id', deleteProductOffer )

module.exports = route