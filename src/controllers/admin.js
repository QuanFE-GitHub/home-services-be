const httpResponses = require('../utils/httpResponses');

// Service
const userService = require('../services/user');
const securityService = require('../services/security');

// Constants
const { Role } = require('../constants/enum');

/**
 * Create function createAdmin
 * @param {*} req
 * @param {*} res
 * @returns {object} admin
 */
const createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.info(`[createAdmin]: req.body -> ${JSON.stringify(req.body)}`);

    // Validate
    const existedEmail = await userService.getUser({ email });
    if (existedEmail) {
      console.log(`[createAdmin]: getUserByEmail -> ${httpResponses.messageExisted('Email')}`);
      return res.badRequestError(httpResponses.messageExisted('Email'));
    }
    console.log(`[createAdmin]: getUserByEmail -> ${httpResponses.SUCCESS}`);

    const hasPassword = securityService.hasPassword(password);
    console.info(`[createAdmin]: hasPassword -> ${hasPassword}`);

    await userService.createUser({ email, password: hasPassword, role: Role.ADMIN });
    console.info(`[createAdmin]: createUser -> ${httpResponses.SUCCESS}`);

    return res.success(httpResponses.messageCreatedSuccess('Admin'));
  } catch (err) {
    console.error(`[createAdmin]: error -> ${err.message}`);
    return res.internalServerError(`${err.message}`);
  }
};

module.exports = {
  createAdmin,
};
