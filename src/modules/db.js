require('dotenv').config();
const mongoose = require('mongoose');

module.exports.initDbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log('[HOME-SERVICE] Database connect successfully.');
  } catch (err) {
    console.log(`[HOME-SERVICE] Error connecting: ${err.message}`);
    process.exit(1);
  }
};
