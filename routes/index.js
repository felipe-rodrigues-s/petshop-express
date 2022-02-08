var express = require('express');
var router = express.Router();

const IndexController = require('../controller/IndexController')
/* GET home page. */
router.get('/', IndexController.index);


module.exports = router;
