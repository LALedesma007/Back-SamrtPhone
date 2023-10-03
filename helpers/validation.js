const modelUsers = require('../models/users.models')
const modelProduct = require('../models/product.models')
const modelProductOffer = require('../models/productoffer.models')


const validationEmail = async(email) =>{
  const isExist = await modelUsers.find({email});
  if(isExist.length !== 0) {
  throw new Error (`Usted ya posee una cuenta registrada`)
  };
  return false
};

const validationUserName = async(userName) =>{
  const isExist = await modelUsers.find({userName});
  if(isExist.length !== 0) {
  throw new Error (`El nombre de usuario ya está en uso`)
  };
  return false
};

const validationModel = async(model) =>{
  const isExist = await modelProduct.find({model});
  if(isExist.length !== 0) {
  throw new Error (`El producto ${model} ya se encuetra registrado`)
  };
  return false
};

const validationModelOffers = async(model) =>{
  const isExist = await modelProductOffer.find({model});
  if(isExist.length !== 0) {
  throw new Error (`El producto ${model} ya se encuetra registrado`)
  };
  return false
};

module.exports = {
  validationEmail,
  validationUserName,
  validationModel,
  validationModelOffers,
}