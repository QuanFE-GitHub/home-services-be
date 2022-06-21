const { capitalize } = require('../helper/helpFunction');

//#region HTTP status
// Success code
module.exports.HTTP_STATUS_CREATED = 201;
module.exports.HTTP_STATUS_OK = 200;

// Error client code
module.exports.HTTP_STATUS_BAD_REQUEST = 400;
module.exports.HTTP_STATUS_UNAUTHORIZED = 401;
module.exports.HTTP_STATUS_NOT_ALLOWED = 403;
module.exports.HTTP_STATUS_NOT_FOUND = 404;
module.exports.HTTP_STATUS_UNSUPPORTED_REQUEST = 419;
module.exports.HTTP_STATUS_CONFLICT = 409;

// Error server code
module.exports.HTTP_STATUS_INTERNAL_ERROR = 500;
//#endregion HTTP status

//#region Auth message
module.exports.CAN_GET_ACCESS = 'Can Get Access';
module.exports.PERMISSION_DENIED = 'Permission Denied';
module.exports.UNAUTHORIZED = 'Unauthorized';
module.exports.CAN_GET_ACCESS_WITH_TOKEN = 'Can Get Access With Token';
module.exports.INCORRECT_PASSWORD = 'Incorrect Password';
//#endregion Auth message

//#region General message
module.exports.SUCCESS = 'Success';
module.exports.FAIL = 'Fail';
//#endregion Genera

//#region Message response
module.exports.messageCreatedSuccess = (name) => `${name} Created Successfully`;
module.exports.messageCreatedFail = (name) => `${name} Created Fail`;

module.exports.messageUpdatedSuccess = (name) => `${name} Updated Successfully`;
module.exports.messageUpdatedFail = (name) => `${name} Updated Fail`;

module.exports.messageDeletedSuccess = (name) => `${name} Deleted Successfully`;
module.exports.messageDeletedFail = (name) => `${name} Deleted Fail`;

module.exports.messageRequired = (name) => `${name} Is Required`;
module.exports.messageExisted = (name) => `${name} Already Exists`;
module.exports.messageNotFound = (name) => `${name} Not Found`;
module.exports.messageInvalid = (name) => `${name} Invalid`;
//#endregion Message response
