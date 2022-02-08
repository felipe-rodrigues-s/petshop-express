const express = require('express');

const router = express.Router();

const PetsController = require('../controller/PetsController')

router.get("/", PetsController.index)

module.exports = router;