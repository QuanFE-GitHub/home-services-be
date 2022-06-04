const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  nameTest: String,
  numberTest: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model('tests', testSchema);
