const { body } = require('express-validator');
const expressions = require('../utils/expressions')
const { validationEmail } = require('../helpers/validation')
const { validationUserName } = require('../helpers/validation')


const validateCreate = [
  body('name').exists().not().isEmpty().isLength({ min: 4, max: 40 }),
  body('lastName').exists().not().isEmpty().isLength({ min: 4, max: 16 }),
  body('email').exists().not().isEmpty().isEmail().custom(validationEmail),
  body('userName').exists().not().isEmpty().custom(validationUserName).isLength({ min: 4, max: 16}),
  body('password').exists().not().isEmpty().matches(expressions.password)
]

module.exports = {
  validateCreate
}