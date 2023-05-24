const { body } = require('express-validator');
const expressionsProducts = require('../utils/expressionsproducts')
const { validationModel } = require('../helpers/validation')



const validateCreateProduct = [
  body('title').exists().not().isEmpty().isLength({ min: 3, max: 40 }),
  body('brand').exists().not().isEmpty().isLength({ min: 3, max: 16 }),
  body('model').exists().not().isEmpty().custom(validationModel),
  body('description').exists().not().isEmpty(),
  body('price').exists().not().isEmpty().isLength({ min: 3, max: 16}).matches(expressionsProducts.price),
  body('image').exists().not().isEmpty(),
]

module.exports = {
  validateCreateProduct
}