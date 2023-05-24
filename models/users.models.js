const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: 'string',
    required: true
  },
  lastName: {
    type:'string',
    required: true
  },
  email: {
    type:'string',
    required: true
  },
  userName: {
    type: 'string',
    required: true
  },
  password: { 
    type:'string',
    required: true
 },
  role: {
    type: 'String',
    default: 'user'
}
})

module.exports = mongoose.model('modelUsers', userSchema)