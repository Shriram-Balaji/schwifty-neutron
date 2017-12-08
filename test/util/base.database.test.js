'use strict';
const fs              = require('fs');
const path            = require('path');
const HOME_DIR        = path.join(__dirname, '..','..');
const SQL_DIR         = path.join(HOME_DIR,'sql');
const config          = require(path.join(HOME_DIR,'config'));
const pool            = require(path.join(HOME_DIR, 'database','connection'));
const CREATE_SCHEMA   = fs.readFileSync(path.join(SQL_DIR, 'create-test.sql')).toString();
const POPULATE_SCHEMA = fs.readFileSync(path.join(SQL_DIR, 'populate-test.sql')).toString();
const DESTROY_SCHEMA  = fs.readFileSync(path.join(SQL_DIR, 'destroy-test.sql')).toString();

const BaseDatabaseTest = function(){
  this.pool = pool;
};

BaseDatabaseTest.prototype.createSchema = function(done){
  let pool = this.pool;
  pool.query(CREATE_SCHEMA, (err, result) => {
    if(err) {
      console.error("ERROR: Creating Schema", err);
      return done(err);
    }
    else {
      pool.query(POPULATE_SCHEMA, (err, result) => {
        if(err) {
          console.error("ERROR: Populating Schema",err);
          return done(err);
        }
        else { 
          // console.log("Schema Created and Populated");
          done();
      }
      });
    }
  });
};

BaseDatabaseTest.prototype.dropSchema = function(done) {
  let pool = this.pool;
  pool.query(DESTROY_SCHEMA, (err, result) => {
    if(err) {
      console.error("ERROR: Deleting Schema", err);
      return done(err);
    }
    else { 
      // console.log("Schema Deleted");
      done();
    }
  });
};

module.exports = BaseDatabaseTest;