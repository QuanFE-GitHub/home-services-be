const httpResponses = require('../utils/httpResponses');

// Service
const userService = require('../services/user');
const securityService = require('../services/security');

// Constants
const { Role } = require('../constants/enum');

// Help
const helpFunction = require('../helper/helpFunction');

/**
 * Create function createAdmin
 * @param {*} req
 * @param {*} res
 * @returns {object} admin
 */
const createAdmin = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    console.info(`[createAdmin]: req.body -> ${JSON.stringify(req.body)}`);

    // Validate
    const existedEmail = await userService.getUser({ email });
    if (existedEmail) {
      console.log(`[createAdmin]: getUserByEmail -> ${httpResponses.messageExisted('Email')}`);
      return res.badRequestError(httpResponses.messageExisted('Email'));
    }

    if (!firstName || !lastName) {
      console.log(`[createAdmin]: name -> ${httpResponses.messageRequired('Name')}`);
      return res.badRequestError(httpResponses.messageRequired('Name'));
    }

    // Create admin
    const hashPassword = securityService.hashPassword(password);
    console.info(`[createAdmin]: hashPassword -> ${hashPassword}`);

    const newAdmin = {
      email,
      password: hashPassword,
      admin: {
        firstName: helpFunction.capitalize(firstName),
        lastName: helpFunction.capitalize(lastName),
      },
      role: Role.ADMIN,
    };
    await userService.createUser(newAdmin);
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
