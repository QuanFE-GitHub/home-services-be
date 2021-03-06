const mongoose = require('mongoose');

// Constants
const { Role } = require('../constants/enum');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Role,
  },
  admin: {
    firstName: String,
    lastName: String,
  },
});

module.exports = mongoose.model('Users', userSchema);
