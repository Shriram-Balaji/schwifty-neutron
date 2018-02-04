const path      = require('path')
const _         = require('lodash')
const crypto    = require('crypto')
const algorithm = 'sha256'

const tokenManager = function(pool){
  this.pool = pool;
}

// Generates a one way HMAC hash
tokenManager.prototype.generateHash = function(key, callback){
  let cipherText = ''
  let hash = crypto.createHmac(algorithm, key).update(cipherText).digest('hex')
  callback(null, hash);
}

tokenManager.prototype.verifyHash = function(hash, callback) {
  let pool = this.pool;
  sql = "SELECT * FROM crypto_hash WHERE hash_token = $1"
  params = [hash]
  console.log(pool)
  pool.query(sql, params, (err, res) => {
    if (err) 
      callback(err, null);
    else {
      let response = _.has(res.rows[0], 'hash_token') ? true : false
      callback(err, response);
    }
  });  
}

/*
 Hashes are manually added to the database based on requirement.
*/

module.exports = tokenManager
