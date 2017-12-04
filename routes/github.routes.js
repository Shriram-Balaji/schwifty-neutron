const path         = require('path');
const express      = require('express');
const router       = express.Router();
const request      = require('request');
const HOMEDIR      = path.join(__dirname, '..');
const config       = require(path.join(HOMEDIR,'config'));

