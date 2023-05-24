const { validationResult } = require('express-validator');
const { getAddproduct, getOneProductById, createOneProduct, editOneProduct, deleteOneProduct } = require('../services/product.service')

const getAllProduct = async (req , res) => {
  try {
    const resp = await getAddproduct();
    res.status(200).json(resp)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProductId = async (req , res) => {
  try {
    const {id} = req.params
    const resp = await getOneProductById(id)
    res.status(200).json(resp)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createAllProduct = async (req , res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  try {
    const userData = req.body
    const resp = await createOneProduct(userData)
    res.status(201).json(resp)  
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const editProduct = async (req , res) => {
  try {
    const { id } = req.params
    const datas = req.body
    const resp = await editOneProduct(id, datas)
    res.status(200).json(resp)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteProduct = async (req , res) => { 
  try {
    const { id } = req.params
    const addDeleteUser = await deleteOneProduct(id)
    res.status(200).json(addDeleteUser)
  } catch (error) {
    res.status(500).json({ error: error.message }
      )
  }
}

module.exports = {
  getAllProduct,
  createAllProduct,
  getProductId,
  editProduct,
  deleteProduct,
}