const path         = require('path');
const express      = require('express');
const router       = express.Router();
const request      = require('request');
const HOMEDIR      = path.join(__dirname, '..');
const config       = require(path.join(HOMEDIR,'config'));

// TODO remove mock.json
const mock        = require(path.join(HOMEDIR,'mock','product-hunt-posts'));


router.get('/', (req, res, next) => {
    res.status(200).json(mock);
});

router.get('/posts/:category', (req, res, next) => {
  let category = req.params.category;
  res.status(200).json(mock);
});

module.exports = router;
