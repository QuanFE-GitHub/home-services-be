const express = require('express');
const testRoute = express.Router();

const testControllers = require('../controllers/test');

testRoute.post('/', testControllers.testFunction);

module.exports = testRoute;
