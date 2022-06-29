require('dotenv').config();
const app = require('./app');
const http = require('http');
const server = http.Server(app);
const packageInfo = require('../package.json');
const indexRoute = require('./routes/index');

server.listen(process.env.SERVER_PORT || 5000, '0.0.0.0', (error) => {
  if (error) {
    console.log(`error: ${error}`);
    process.exit(1);
  }
  console.log(`[HOME-SERVICE] Version: *** ${packageInfo.version} ***`);
  console.log(`[HOME-SERVICE] Server is listening on port: ${process.env.SERVER_PORT}`);
});
