const path           = require('path');
const HOME_DIR       = path.join(__dirname, '..');
const config         = require(path.join(HOME_DIR,'config'));
const {Pool, Client} = require('pg');

// initialize connection pool
const pool = new Pool({
  user: config.db.user,
  host: config.db.host,
  database: config.db.name,
  password: config.db.password,
  port: 5432,
});

module.exports = pool;