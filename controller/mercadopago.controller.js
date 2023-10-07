const mercadopago = require('../config/mercadopagoConfig');

function createPreference(req, res) {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      "success": "http://localhost:4173",
      "failure": "http://localhost:4173",
      "pending": ""
    },
    auto_return: "approved",
  };

  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id
      });
    }).catch(function (error) {
      console.log(error);
      res.status(500).json({ error: "Error al crear la preferencia de pago" });
    });
}

module.exports = { createPreference };