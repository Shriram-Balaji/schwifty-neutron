const request  = require('supertest');
const assert   = require('chai').assert;
const protocol = 'http';
const host     = 'localhost';
const port     = '3030';
const base     = `${protocol}://${host}:${port}`;

console.log('URL BASE:',base);

describe('Main Route', function() {
  it('handles a GET to /', done => {
    request(base)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        assert.ok(res.body);
        assert.equal(typeof res.body, 'object');        
        assert.equal(res.body.message, 'Hello');
        done();
      });
  });
});
