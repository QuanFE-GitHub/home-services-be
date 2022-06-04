const testService = require('../services/test');
const httpResponses = require('../utils/httpResponses');

const testFunction = async (req, res) => {
  try {
    const { nameTest, numberTest } = req.body;
    console.log(`[testFunction] body -> ${JSON.stringify(req.body)}`);

    await testService.createTest({ nameTest, numberTest });
    console.log(`[testFunction] createTest -> ${httpResponses.SUCCESS}`);

    return res.createdSuccess(httpResponses.SUCCESS);
  } catch (err) {
    return res.internalServerError(err.message);
  }
};

module.exports = {
  testFunction,
};
