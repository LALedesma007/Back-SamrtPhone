const { validationResult } = require('express-validator');
const {  getAddproductOffer, getOneProductOfferById, createOneProductOffer, editOneProductOffer, deleteOneProductOffer,} = require('../services/productoffer.service')

const getAllProductOffer = async (req , res) => {
  try {
    const resp = await getAddproductOffer();
    res.status(200).json(resp)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProductOfferId = async (req , res) => {
  try {
    const {id} = req.params
    const resp = await getOneProductOfferById(id)
    res.status(200).json(resp)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createAllProductOffer = async (req , res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  try {
    const userData = req.body
    const resp = await createOneProductOffer(userData)
    res.status(201).json(resp)  
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const editProductOffer= async (req , res) => {
  try {
    const { id } = req.params
    const datas = req.body
    const resp = await editOneProductOffer(id, datas)
    res.status(200).json(resp)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteProductOffer = async (req , res) => { 
  try {
    const { id } = req.params
    const addDeleteUser = await deleteOneProductOffer(id)
    res.status(200).json(addDeleteUser)
  } catch (error) {
    res.status(500).json({ error: error.message }) 
  }
}

module.exports = {
  getAllProductOffer,
  createAllProductOffer,
  getProductOfferId,
  editProductOffer,
  deleteProductOffer,
}