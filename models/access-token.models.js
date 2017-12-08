'use strict';
const path             = require('path');
const HOME_DIR         = path.join(__dirname,'..','..');
const _                = require('lodash/core');

// constructor
const AccessTokenModel = function(pool) {
  this.pool = pool;
};

AccessTokenModel.prototype.create = function(data, callback) {
  let pool = this.pool;
  // lodash has checks for direct (and not inherited) properties using Object.prototype.hasOwnProperty 
  if(_.has(data, 'name') && _.has(data,'token')){
    if(!_.has(data, 'description'))
      data.description = null;
    if(!_.has(data, 'endpoint'))
      data.endpoint = null;

    let sql = 'INSERT INTO access_token (name, description, token, endpoint) VALUES ($1, $2, $3, $4) RETURNING *';
    let values = [data.name, data.description, data.token, data.endpoint];
    pool.query(sql, values, (err, res) => {
      if (err) 
        callback(err, null);
      else
        callback(null, res.rows[0]);
    });
  }
  else{
    let err = new Error("Required non-null Parameters Missing - name, token");
    callback(err, null);
  }
};


AccessTokenModel.prototype.read = function(data, callback){
  let pool = this.pool;
  if(_.has(data,'token_id')){
    let sql = 'SELECT * FROM access_token WHERE token_id = $1';
    let params = [data.token_id];
    pool.query(sql, params, (err, res) => {
      if (err) 
        callback(err, null);
      else
        callback(null, res.rows[0]);
    });  
  }
  else{
    let err = new Error("Required Parameters Missing - token_id");
    callback(err, null);
  }
};

AccessTokenModel.prototype.update = function(data, callback) {
  let pool = this.pool;
  if(_.has(data,'token_id')){
    let sql = 'UPDATE access_token';
    let params = [];
    let parts  = [];
    let count = 0;
    _.forEach(data, function(value, key) {
      // cannot update token_id
      if(key!=='token_id') {
        count = count + 1;
        if(value === null) {
          parts.push(`${key} = NULL`);
        }
        else {
          // key = $1
          parts.push(` ${key} = $${count}`);
          params.push(value);
        }
      }
    });  
    sql += ` SET ${parts.join(', ')}`;
    sql += ` WHERE token_id = $${count+1} RETURNING *`;
    params.push(data.token_id);
    pool.query(sql, params, (err, res) => {
      if (err) 
        callback(err, null);
      else
        callback(null, res.rows[0]);
    });
  } 
  else{
    let err = new Error("Required Parameters Missing - token_id");
    callback(err, null);
  }
};

AccessTokenModel.prototype.delete = function(data, callback) {
  let pool = this.pool;
  if(_.has(data,'token_id')){
   let sql = 'DELETE FROM access_token WHERE token_id = $1 RETURNING *';
   let params = [data.token_id];
   pool.query(sql, params, (err, res) => {
      if (err) 
        callback(err, null);
      else
        callback(null, res.rows[0]);
   });
  }
  else{
    let err = new Error("Required Parameters Missing - token_id");
    callback(err, null);
  }
    
};

module.exports = AccessTokenModel;

// NOTE: In the above model if arrow functions are used, the lexical scope of 'this' points to function itself, ie. it is static and does not change based on context unlike normal functions, which are dynamic and have to instantiated with the new keyword, to be used as constructors. the value of 'this' in normal functions is based on context, and by default point to the global object.