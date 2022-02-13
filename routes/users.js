var express = require('express');
var router = express.Router();

const UserController = require('../controller/UserController')

/* GET users listing. */
router.get('/cadastro',UserController.cadastro);
router.get('/login',UserController.login);
router.get('/sobre',UserController.sobre);

module.exports = router;
