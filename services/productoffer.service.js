const modelProductOffer = require('../models/productoffer.models')

const getAddproductOffer = async() => {
  const getData = await modelProductOffer.find()
  return {getData}
}

const getOneProductOfferById = async(id) => {
  const getDataOneById = await modelProductOffer.find({_id: id})
  return {getDataOneById}
}

const createOneProductOffer = async(userData) => {
  const newProduct =await modelProductOffer.create(userData);
  return newProduct.save();
}

const editOneProductOffer = async(id, datas) => {
  return await modelProductOffer.findByIdAndUpdate(id, datas)
}

const deleteOneProductOffer = async(id) => {
  const deleteProduct =  await modelProductOffer.findByIdAndDelete({_id: id})
  return {deleteProduct}
}
module.exports = {
  getAddproductOffer,
  getOneProductOfferById,
  createOneProductOffer,
  editOneProductOffer,
  deleteOneProductOffer,
}