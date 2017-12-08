const path       = require('path');
const HOME_DIR   = path.join(__dirname, '..','..','..');
const config     = require(path.join(HOME_DIR,'config'));
const request    = require('supertest');
const assert     = require('chai').assert;
const protocol   = config.protocol ? config.protocol : 'http' ;
const host       = config.host ? config.host : 'localhost';
const port       = config.port ? config.port : '3030';
const mountpoint = config.mountpoint ? config.mountpoint : 'api/v1';
const base       = `${protocol}://${host}:${port}/${mountpoint}`;

console.log('URL BASE:',base);

describe('Dribbble API Route', function() {
  it('handles a GET to /dribbble', done => {
    request(base)
      .get('/dribbble')
      .expect(200)
      .end(function(err, res) {
        assert.ok(res.body);
        assert.ok(res.body[0]);
        assert.ok(res.body[0].id);
        assert.ok(res.body[0].width);        
        assert.ok(res.body[0].images);
        assert.ok(res.body[0].height);
        assert.ok(res.body[0].views_count);
        assert.ok(res.body[0].likes_count);
        assert.ok(res.body[0].attachments_url);
        assert.ok(res.body[0].user);
        assert.ok(res.body[0].user.id);
        done();
      });
  });
});
