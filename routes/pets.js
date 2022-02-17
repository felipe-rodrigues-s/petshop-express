const express = require('express');

const router = express.Router();

const PetsController = require('../controller/PetsController')

// router.get("/", PetsController.index)

router.get("/cadastrapet",PetsController.criaPet)

module.exports = router;