const path         = require('path');
const express      = require('express');
const router       = express.Router();
const request      = require('request');
const HOMEDIR      = path.join(__dirname, '..');
const config       = require(path.join(HOMEDIR,'config'));

const mock         = require(path.join(HOMEDIR, 'mock', 'dribbble-shots'));

// same as GET /shots
router.get('/', function(req, res, next){
  // TODO - Add git req
  let querystring = req.query;
  res.status(200).json(mock);
});

router.get('/shots', function(req, res, next){
  // TODO - Add git req
  // let querystring = req.query;
  res.status(200).json(mock);
});

router.get('/shots/:id', function(req, res, next){
  res.status(200).json(mock);
});


// TODO find if /buckets are needed from API

module.exports = router;