const path       = require('path');
const HOMEDIR    = path.join(__dirname, '..','..','..');
const config     = require(path.join(HOMEDIR,'./config'));
const request    = require('supertest');
const assert     = require('chai').assert;
const protocol   = config.protocol ? config.protocol : 'http' ;
const host       = config.host ? config.host : 'localhost';
const port       = config.port ? config.port : '3030';
const mountpoint = config.mountpoint ? config.mountpoint : 'api/v1';
const base       = `${protocol}://${host}:${port}/${mountpoint}`;


console.log('URL BASE:', base);

describe('Main Route', function() {
  it('handles a GET to /', done => {
    request(base)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        assert.ok(res.body);
        done();
      });
  });
});
