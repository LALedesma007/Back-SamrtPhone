const mercadopago = require("mercadopago");
const {tokenConfig} = require('./config')

mercadopago.configure({
  access_token:  tokenConfig.mercadopago_token,
});

module.exports = mercadopago;