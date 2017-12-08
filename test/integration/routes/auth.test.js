const path       = require('path');
const HOME_DIR   = path.join(__dirname, '..','..','..');
const config     = require(path.join(HOME_DIR,'./config'));
const request    = require('supertest');
const assert     = require('chai').assert;
const protocol   = config.protocol ? config.protocol:     'http' ;
const host       = config.host ? config.host:             'localhost';
const port       = config.port ? config.port:             '3030';
const mountpoint = config.mountpoint ? config.mountpoint: 'api/v1';
const base       = `${protocol}://${host}:${port}/${mountpoint}`;

console.log('URL BASE:',base);

describe('Auth Access-Token Routes', function() {
  
  it('handles a POST to /auth/dribbble', done => {
    let data = {};
    data.token = 'ffd7b19e-64ed-4880-abe1-1ea4f0e8ef06';
    request(base)
      .post('/auth/dribbble')
      .send(data)
      .expect(200)
      .end(function(err, res) {
        assert.ok(res.body.token_id);
        assert.ok(res.body.name);        
        assert.ok(res.body.description);
        assert.ok(res.body.endpoint);
        assert.equal(res.body.token, data.token);
        done();
      });
  });
});
