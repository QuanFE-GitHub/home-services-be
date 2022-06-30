const cors = require('cors');
const express = require('express');
const httpResponses = require('./utils/httpResponses');
const session = require('express-session');

const app = express();

const indexRoute = require('./routes/index');
const { initDbConnection } = require('./modules/db');

const keys = require('./constants/keys');

initDbConnection();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Setup express/session
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: keys.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(cors());

// Setup middleware response
app.use((req, res, next) => {
  res.unauthorized = () => {
    return res.status(httpResponses.HTTP_STATUS_UNAUTHORIZED).json({
      success: false,
      message: `${httpResponses.UNAUTHORIZED}`,
    });
  };

  res.badRequestError = (message) => {
    return res.status(httpResponses.HTTP_STATUS_BAD_REQUEST).json({
      success: false,
      message: message,
    });
  };

  res.notFoundError = (message) => {
    return res.status(httpResponses.HTTP_STATUS_NOT_FOUND).json({
      success: false,
      message: message,
    });
  };

  res.internalServerError = (message) => {
    return res.status(httpResponses.HTTP_STATUS_INTERNAL_ERROR).json({
      success: false,
      message: message,
    });
  };

  res.success = (message, data) => {
    const responseObj = {
      success: true,
      message: message,
      data: data,
    };
    return res.status(httpResponses.HTTP_STATUS_OK).json(responseObj);
  };

  res.createdSuccess = (message, data) => {
    const responseObj = {
      success: true,
      message: message,
    };
    data && (responseObj.data = data);
    return res.status(httpResponses.HTTP_STATUS_CREATED).json(responseObj);
  };

  res.response = (statusCode, success, message) => {
    return res.status(statusCode).json({
      success: success,
      message: message,
    });
  };

  next();
});

app.use('/api', indexRoute);

app.get('/', function (req, res) {
  console.log('Run app');
  res.send('Home service - Backend.');
});

module.exports = app;
