var express = require('express');
var router = express.Router();

const petsController = require("../controller/pets")

router.get('/listapets',petsController.listaPets)
router.post('/listapets',petsController.cadastraPet)



module.exports = router;