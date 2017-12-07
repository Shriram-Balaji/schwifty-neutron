const path         = require('path');
const express      = require('express');
const router       = express.Router();  
const request      = require('request');
const HOME_DIR      = path.join(__dirname, '..','..');
const config       = require(path.join(HOME_DIR,'config'));

// TODO remove mock.json
const mock        = require(path.join(HOME_DIR,'mock','product-hunt-posts'));

const initProductHuntRoutes = function(pool) {
  router.get('/', (req, res) => {
      res.status(200).json(mock);
  });

  router.get('/posts/:category', (req, res) => {
    let category = req.params.category;
    res.status(200).json(mock);
  });

  return router;
};
module.exports = initProductHuntRoutes;
