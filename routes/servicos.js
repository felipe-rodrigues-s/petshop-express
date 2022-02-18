var express = require('express');
var router = express.Router();

const servicoController = require("../controller/servicos")

router.get('/listaservicos',servicoController.listaServicos)
router.get('/cadastroservico',servicoController.criarServico)
router.post('/cadastroservico',servicoController.criarServico)

module.exports = router;