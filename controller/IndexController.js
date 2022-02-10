const servicos =  require('../model/servico.json')
const IndexController ={
  index: (req, res)=>{
    
    res.render('index', {listaServicos: servicos});
  }
}

module.exports = IndexController;