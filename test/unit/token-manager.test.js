const path             = require('path');
const assert           = require('chai').assert;
const HOME_DIR         = path.join(__dirname, '..','..');
const TEST_DIR         = path.join(HOME_DIR, 'test');
const config           = require(path.join(HOME_DIR, 'config'));
const tokenManager     = require(path.join(HOME_DIR, 'util', 'token-manager.util'));
const BaseDatabaseTest = require(path.join(TEST_DIR, 'util', 'base.database.test'));
const BDBT             = new BaseDatabaseTest();

let manager = null;
let createdHash = null;
describe('Token Manager', () => {

  before(function(done) {
    return BDBT.createSchema(function(err) {
      manager = new tokenManager(BDBT.pool);
      return done(err);
    });
  });

  after(function(done) {
    return BDBT.dropSchema(function(err) {
      return done(err);
    });
  });

  it('can create a hash', (done) => {
    key = 'testKey'+ Date.now(); // or Date().getTime()
    manager.generateHash(key, (err, hash)=> {
      if(err)
        return done(err);
      else {
        assert.ok(hash);
        assert.isNotEmpty(hash);
        createdHash = hash;
        done()
      }
    });
  });

  it('can insert a database hash',(done) => {
    let sql = 'INSERT INTO crypto_hash (hash_token) VALUES ($1) RETURNING *';
    let values = [createdHash];
    BDBT.pool.query(sql, values, (err, res) => {
      if (err) 
        return done(err);
      else{
        assert.ok(res.rows[0]);
        assert.equal(createdHash, res.rows[0].hash_token);
        done()
      }
    });  
  })

  it('can verify a hash based on db lookup', (done) => {
    manager.verifyHash(createdHash, (err, verified) => {
      if(err)
        return(done(err));
      else {
        assert.ok(verified)
        assert.isBoolean(verified)
        assert.isTrue(verified)
        done()
      }
    })
  })
});