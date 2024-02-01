var express = require('express');
const router = express.Router();

const commonController = require('../app/controllers/CommonController');

router.use('/', commonController.index);

router.use('/search', commonController.search);

module.exports = router;
