let express = require('express');
let router = express.Router();


const indexController = require("../controller")


router.get('/',indexController.index)


module.exports = router;
