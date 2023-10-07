const config ={
  portConfig :{
  port: process.env.PORT  
  },

  dbConfig: {
    db_Url: process.env.URL_BASE
  },
  
  tokenConfig: {
    secret_token: process.env.KEY_TOKEN,
    mercadopago_token: process.env.MERCADOPAGO_TOKEN,
  }
}

module.exports = config