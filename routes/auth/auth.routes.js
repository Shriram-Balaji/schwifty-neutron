const path             = require('path');
const _                = require('lodash/core');
const express          = require('express');
const router           = express.Router();
const request          = require('request');
const HOME_DIR         = path.join(__dirname, '..','..');
const config           = require(path.join(HOME_DIR,'config'));
const AccessTokenModel = require(path.join(HOME_DIR,'models','access-token.models'));

// This route is used to authenticate api tokens for the various services. Uses the Access Token Model to create and delete tokens.

const initAuthRoutes = function(pool) {

  const model = new AccessTokenModel(pool);
  router.get('/', (req, res) => {
    res.send("Welcome to the Auth Service");
  });
  
  /*
    expects json object containing access_token
    {
      token: '';
    }
  */
  router.post('/dribbble', (req, res) => {
    if(_.has(req.body,'token')){
      let data = {
        name  : 'dribbble',
        description : 'Dribbble API Access Token',
        endpoint : 'https://api.dribbble.com/v1',
        token : req.body.token
      };
      model.create(data, (err, access_token)=>{
        if(err) {
          console.error("Error:", err);
          res.status(500).send(err);
        }
        else
          res.status(200).send(access_token);
      });
    }
    else {
      res.status(401).send("Valid Access Token Required!");
    }
  });

  return router;
};
module.exports = initAuthRoutes;
