const mongoose = require('mongoose')

const conectdb = async({db_Url}) => {

  try {
    await mongoose.connect(`mongodb+srv://${db_Url}`)
    console.log('Conexion exitosa a Mongodb');
  } catch (error) {
    console.log(error);
  }
}

module.exports = conectdb