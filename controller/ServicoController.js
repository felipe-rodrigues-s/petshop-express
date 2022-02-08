const servicos = require('../model/servico.json')
const ServicosController = {
  index:(req, res) => {
    res.send(servicos)
  }
}

module.exports = ServicosController