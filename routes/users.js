let express = require('express');
let router = express.Router();
const usuarioController = require("../controller/usuario")

router.get('/cadastro',usuarioController.cadastro )
router.get('/login',usuarioController.login )


module.exports = router;
