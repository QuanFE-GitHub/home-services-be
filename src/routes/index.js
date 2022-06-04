const express = require('express');
const routeIndex = express.Router();

const testRoute = require('./test');

routeIndex.use('/tests', testRoute);

module.exports = routeIndex;
