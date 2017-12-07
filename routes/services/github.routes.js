const path     = require('path');
const express  = require('express');
const router   = express.Router();
const request  = require('request');
const HOME_DIR = path.join(__dirname, '..','..');
const config   = require(path.join(HOME_DIR,'config'));

const initGithubRoutes = function(pool) {
  router.get('/',(req, res, next) => {
    res.status(200).send("Hello Github");
  });

  return router;
};

module.exports = initGithubRoutes;