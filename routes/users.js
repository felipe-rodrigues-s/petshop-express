var express = require('express');
var router = express.Router();

const UserController = require('../controller/UserController')

/* GET users listing. */
router.get('/',UserController.index);

module.exports = router;
