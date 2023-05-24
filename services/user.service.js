const modelUsers = require('../models/users.models')

const getAddUsers = async() => {
  const getData = await modelUsers.find()
  return {getData}
}

const getOneUserById = async(id) => {
  const getDataOneById = await modelUsers.find({_id: id})
  return {getDataOneById}
}

const createOneUser = async(userData) => {
  const newUser =await modelUsers.create(userData);
  return newUser.save();
}

const editOneUser = async(id, datas) => {
  return await modelUsers.findByIdAndUpdate(id, datas)
}

const deleteOneUser = async(id) => {
  const deleteUser =  await modelUsers.findByIdAndDelete({_id: id})
  return {deleteUser}
}
module.exports = {
  getAddUsers,
  getOneUserById,
  createOneUser,
  editOneUser,
  deleteOneUser,
}