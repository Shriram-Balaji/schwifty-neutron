const path     = require('path');
const request  = require('request');
const HOME_DIR = path.join(__dirname, '..','..');
const config   = require(path.join(HOME_DIR,'config'));

// This route is used to authenticate api tokens for the various services. Uses the Auth Model to check for valid tokens for the corresponding services.

const initAuthRoutes = function(pool) {

  router.get('/', (req, res) => {
    res.send("Welcome to the Auth Service");
  });

  router.post('/dribbble', (req, res) => {
    
  })

  return router;
};