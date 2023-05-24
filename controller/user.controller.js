const { validationResult } = require('express-validator');
const {  getAddUsers, getOneUserById, createOneUser, editOneUser, deleteOneUser } = require('../services/user.service')
const bcrypt = require('bcrypt')


const getAllUsers = async (req , res) => {
  try {
    const resp = await getAddUsers();
    res.status(200).json(resp)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getUserId = async (req , res) => {
  try {
    const {id} = req.params
    const resp = await getOneUserById(id)
    res.status(200).json(resp)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createAllUsers = async (req , res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  try {
    const userData = req.body
    const salt = bcrypt.genSaltSync(10)
    userData.password = bcrypt.hashSync(userData.password, salt) 
    const resp = await createOneUser(userData)
    res.status(201).json(resp)  
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const editOneUsers = async (req , res) => {
  try {
    const { id } = req.params
    const datas = req.body
    const resp = await editOneUser(id, datas)
    res.status(200).json(resp)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteOneUsers = async (req , res) => { 
  try {
    const { id } = req.params
    const addDeleteUser = await deleteOneUser(id)
    res.status(200).json(addDeleteUser)
  } catch (error) {
    res.status(500).json({ error: error.message }
      )
  }
}

module.exports = {
  getAllUsers,
  getUserId,
  createAllUsers,
  editOneUsers,
  deleteOneUsers,
}