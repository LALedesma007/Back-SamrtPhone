const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  title: {
    type: 'string',
    required: true
  },
  model: {
    type:'string',
    required: true
  },
  description: {
    type:'string',
    required: true
  },
  price: {
    type:'number',
    required: true
  },
  quanty: {
    type:'number',
    required: true
  },
  category: {
    type:'string',
    required: true
  },
  image: { 
    type:'string',
    required: true
 },

})

module.exports = mongoose.model('modelProductOffer', productSchema)