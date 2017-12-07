const express           = require('express');
const router            = express.Router();
const HOME_DIR          = path.join(__dirname, '..');
const ROUTES_DIR        = path.join(HOME_DIR, 'routes');
const authRoutes        = require(path.join(ROUTES_DIR, 'auth'));
const githubRoutes      = require(path.join(ROUTES_DIR, 'services','github.routes'));
const dribbbleRoutes    = require(path.join(ROUTES_DIR, 'services','dribbble.routes'));
const productHuntRoutes = require(path.join(ROUTES_DIR, 'services','product-hunt.routes'));

const initExpressRoutes = function(pool) {
  // router configuration
  router.get('/', (req, res)=>{
    res.status(200).send("Welcome to Schwifty Neutron");
  });

  router.use('/auth',authRoutes(pool));
  router.use('/github',githubRoutes(pool));
  router.use('/dribbble', dribbbleRoutes(pool));
  router.use('/product-hunt',productHuntRoutes(pool));

  // router has to be returned back to the main app, or else the value returned from the function is undefined and hence the app.use [ internally using Router.use()?], cannot use the middleware route.

   return router;
};

// router.use('/github', githubRoutes);

module.exports = initExpressRoutes;
