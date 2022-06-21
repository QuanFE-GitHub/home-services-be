const bcrypt = require('bcrypt');

// Keys
const { SALT_KEY } = require('../constants/keys');

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(SALT_KEY);
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, passwordHash) => {
  return bcrypt.compareSync(password, passwordHash);
};

module.exports = {
  hashPassword,
  comparePassword,
};
