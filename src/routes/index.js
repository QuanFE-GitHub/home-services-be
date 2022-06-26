const express = require('express');
const routeIndex = express.Router();

// Router api
const testRoute = require('./test');
const authRoute = require('./auth');
const adminRoute = require('./admin');

routeIndex.use('/tests', testRoute);

routeIndex.use('/auth', authRoute);

routeIndex.use('/admins', adminRoute);

module.exports = routeIndex;
