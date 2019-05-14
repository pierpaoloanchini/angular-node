const express = require('express');
const router = express.Router();
const controller = require('./user.controller.js')
const bodyParser = require('body-parser');

router.get('/test', controller.call);

module.exports = router
