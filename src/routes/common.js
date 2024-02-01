var express = require('express');
const router = express.Router();

const commonController = require('../app/controllers/CommonController');

router.get('/', commonController.index);

router.get('/search', commonController.search);

module.exports = router;
