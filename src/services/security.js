const bcrypt = require('bcrypt');

// Keys
const { SALT_KEY } = require('../constants/keys');

const hasPassword = (password) => {
  const salt = bcrypt.genSaltSync(SALT_KEY);
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (passwordCompare) => {
  return bcrypt.compareSync(passwordCompare, SALT_KEY);
};

module.exports = {
  hasPassword,
  comparePassword,
};
