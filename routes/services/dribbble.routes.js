const path     = require('path');
const express  = require('express');
const request  = require('request');
const HOME_DIR = path.join(__dirname, '..','..');
const config   = require(path.join(HOME_DIR,'config'));
const router   = express.Router();  

const mock         = require(path.join(HOME_DIR, 'mock', 'dribbble-shots'));

const initDribbleRoutes = function(pool){  
// same as GET /shots
  router.get('/', function(req, res){
    // TODO - Add git req
    
    res.status(200).json(mock);
  });

  router.get('/shots', function(req, res){
    // TODO - Add git req
    // let querystring = req.query;
    res.status(200).json(mock);
  });

  router.get('/shots/:id', function(req, res){
    res.status(200).json(mock);
  });

  return router;
};

// TODO find if /buckets are needed from API

module.exports = initDribbleRoutes;