const express = require('express');
const adminRoute = express.Router();

// Controllers
const adminController = require('../controllers/admin');

// Api create admin for system
adminRoute.post('/', adminController.createAdmin);

module.exports = adminRoute;
