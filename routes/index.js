const express           = require('express');
const router            = express.Router();
const productHuntRoutes = require('./product-hunt.routes');
const dribbbleRoutes    = require('./dribbble.routes');

// router configuration
router.get('/', (req, res)=>{
  res.status(200).send("Welcome to Schwifty Neutron");
});

router.use('/dribbble', dribbbleRoutes);
router.use('/product-hunt',productHuntRoutes);
// router.use('/github', githubRoutes);

module.exports = router;
