let express = require('express');
let router = express.Router();
const usuarioController = require("../controller/usuario")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cadastro',usuarioController.cadastro )
router.get('/login',usuarioController.login )
router.get('/contato',usuarioController.contato )

module.exports = router;
