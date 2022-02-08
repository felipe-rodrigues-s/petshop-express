const express = require('express');

const router = express.Router();

const ServicosController = require('../controller/ServicoController')

router.get("/",ServicosController.index)

module.exports = router; 