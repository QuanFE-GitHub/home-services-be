const User = require('../models/user');

const createUser = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const getUser = async (query) => {
  return await User.findOne(query);
};

const getUsers = async (query) => {
  return await User.find(query);
};

const updateUserById = async (_id, userUpdate) => {
  return await User.findByIdAndUpdate(_id, userUpdate);
};

const deleteUserById = async (_id) => {
  return await User.findByIdAndDelete(_id);
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUserById,
  deleteUserById,
};
