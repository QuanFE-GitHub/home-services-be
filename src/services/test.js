const Test = require('../models/test');

const createTest = async (test) => {
  const newTest = new Test(test);
  return await newTest.save();
};

module.exports = {
  createTest,
};
