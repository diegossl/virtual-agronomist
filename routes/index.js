const express = require('express');
const IndexController = require('../app/controllers/IndexController')
const router = express.Router();

router.get('/', IndexController.index);

module.exports = router;
