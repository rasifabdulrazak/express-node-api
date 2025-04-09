require('dotenv').config({ path: `${process.cwd()}/.env` });

module.exports = {
  port: process.env.APP_PORT || 3000,
  env: process.env.NODE_ENV || 'development',
};