const httpResponses = require('../utils/httpResponses');

// Services
const userService = require('../services/user');
const securityService = require('../services/security');
const { Role } = require('../constants/enum');

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns {Object} user
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`[login]: req.body -> ${JSON.stringify(req.body)}`);

    const existedUser = await userService.getUser({ email });
    if (!existedUser) {
      console.log(`[login]: getUser -> ${httpResponses.messageNotFound('Email')}`);
      return res.badRequestError(httpResponses.messageNotFound('Email'));
    }

    const isComparePassword = securityService.comparePassword(password, existedUser.password);
    if (!isComparePassword) {
      console.log(`[login]: comparePassword -> ${httpResponses.INCORRECT_PASSWORD}`);
      return res.badRequestError(httpResponses.INCORRECT_PASSWORD);
    }

    let infoUser;
    switch (existedUser.role) {
      case Role.ADMIN:
        infoUser = existedUser.admin;
        console.info(`[login]: role -> ${existedUser.role}`);
      case Role.CUSTOMER:
    }

    const resUser = {
      email: existedUser.email,
      role: existedUser.role,
      infoUser,
    };
    console.log(`[login]: response -> ${httpResponses.SUCCESS}`);

    return res.success(httpResponses.SUCCESS, { user: resUser });
  } catch (err) {
    console.error(`[login]: error -> ${err.message}`);
    return res.internalServerError(err.message);
  }
};

module.exports = {
  login,
};
