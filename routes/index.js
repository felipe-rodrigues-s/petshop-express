let express = require('express');
let router = express.Router();


const indexController = require("../controller")


router.get('/',indexController.index)
router.get('/sobre',indexController.sobre)
router.get('/contato',indexController.contato)


module.exports = router;
