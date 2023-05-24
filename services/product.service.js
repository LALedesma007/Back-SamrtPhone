const modelProduct = require('../models/product.models')

const getAddproduct = async() => {
  const getData = await modelProduct.find()
  return {getData}
}

const getOneProductById = async(id) => {
  const getDataOneById = await modelProduct.find({_id: id})
  return {getDataOneById}
}

const createOneProduct = async(userData) => {
  const newProduct =await modelProduct.create(userData);
  return newProduct.save();
}

const editOneProduct = async(id, datas) => {
  return await modelProduct.findByIdAndUpdate(id, datas)
}

const deleteOneProduct = async(id) => {
  const deleteProduct =  await modelProduct.findByIdAndDelete({_id: id})
  return {deleteProduct}
}
module.exports = {
  getAddproduct,
  getOneProductById,
  createOneProduct,
  editOneProduct,
  deleteOneProduct,
}