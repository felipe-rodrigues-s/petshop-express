const servicos =  require('../model/servico.json')
const IndexController ={
  index: (req, res)=>{
    const listaServico = JSON.stringify(servicos)
    res.render('index', {listaServicos: servicos});
  }
}

module.exports = IndexController;