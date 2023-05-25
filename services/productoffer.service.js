const modelProductOffer = require('../models/productoffer.models')

const getAddproductOffer = async() => {
  const getDataOffers = await modelProductOffer.find()
  return {getDataOffers}
}

const getOneProductOfferById = async(id) => {
  const getDataOneOffersById = await modelProductOffer.find({_id: id})
  return {getDataOneOffersById}
}

const createOneProductOffer = async(userData) => {
  const newProductOffers =await modelProductOffer.create(userData);
  return newProductOffers.save();
}

const editOneProductOffer = async(id, datas) => {
  return await modelProductOffer.findByIdAndUpdate(id, datas)
}

const deleteOneProductOffer = async(id) => {
  const deleteProductOffers =  await modelProductOffer.findByIdAndDelete({_id: id})
  return {deleteProductOffers}
}
module.exports = {
  getAddproductOffer,
  getOneProductOfferById,
  createOneProductOffer,
  editOneProductOffer,
  deleteOneProductOffer,
}