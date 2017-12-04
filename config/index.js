const env = process.env.NODE_ENV || 'local';
const config = require(`./${env}.config.js`);
module.exports = config;