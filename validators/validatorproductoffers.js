const { body } = require('express-validator');
const expressionsProducts = require('../utils/expressionsproducts')
const { validationModelOffers } = require('../helpers/validation')



const validateCreateProductOffers = [
  body('title').exists().not().isEmpty().isLength({ min: 3, max: 40 }),
  body('model').exists().not().isEmpty().custom(validationModelOffers),
  body('description').exists().not().isEmpty(),
  body('price').exists().not().isEmpty().isLength({ min: 3, max: 16}).matches(expressionsProducts.price),
  body('quanty').exists().not().isEmpty().isLength({ min: 1, max: 3}),
  body('image').exists().not().isEmpty(),
]

module.exports = {
  validateCreateProductOffers
}