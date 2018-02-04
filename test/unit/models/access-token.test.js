const path             = require('path');
const assert           = require('chai').assert;
const HOME_DIR         = path.join(__dirname, '..','..','..');
const TEST_DIR         = path.join(HOME_DIR, 'test');
const config           = require(path.join(HOME_DIR, 'config'));
const AccessTokenModel = require(path.join(HOME_DIR, 'models', 'auth','access-token.model'));
const BaseDatabaseTest = require(path.join(TEST_DIR, 'util', 'base.database.test'));
const BDBT             = new BaseDatabaseTest();

let model = null;
let access_token = null;

describe('AccessTokenModel',() => {
  
  before(function(done) {
    return BDBT.createSchema(function(err) {
      model = new AccessTokenModel(BDBT.pool);
      return done(err);
    });
  });

  after(function(done) {
    return BDBT.dropSchema(function(err) {
      return done(err);
    });
  });

  it('can create an access token',(done)=>{
    let data = {};
    data.name = "testGithubService";
    data.description = "Test Github Service Access Token";
    data.token = "dcdd1fb6-0aed-48bd-a2ea-cc568ad42ab3";
    data.endpoint = "http://fake-github-service.com";
    model.create(data, (err, result) => {
      if(err)
        return done(err);
      else {
        assert(result!=null);
        assert.equal(result.name, 'testGithubService');
        assert.equal(result.description,'Test Github Service Access Token');
        assert.equal(result.token,'dcdd1fb6-0aed-48bd-a2ea-cc568ad42ab3');
        assert.equal(result.endpoint, 'http://fake-github-service.com');
        access_token = result;
        done();        
      }
    });
    // model.create
  });

  it('can read an access token',(done) => {
    model.read(access_token, (err,result) => {
      if(err)
        return done(err);
      else
        assert.equal(result.token_id, access_token.token_id);
        done();
    });
  });

  it('can update an access token', (done) => {
    let values = {token_id: access_token.token_id, name: 'fake_name', description: 'fake description', endpoint: 'http://fake_endpoint'};
    model.update(values, (err, result) => {
      if(err){
        return done(err);
      }
      else {
        assert.equal(result.token_id, values.token_id);
        assert.equal(result.name, values.name);
        assert.equal(result.description, values.description);
        assert.equal(result.endpoint, values.endpoint);
        done();
      }
      
    });
  });

  it('can delete an access token', (done) => {
    model.delete(access_token, (err,result) => {
      if(err)
        return done(err);
      else
        assert.equal(result.token_id, access_token.token_id);
        done();
    });
  });
});