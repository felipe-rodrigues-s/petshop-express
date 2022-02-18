const servicos = require('../model/servico.json')

const indexController = {
    index: (req, res) => {
        res.render('index',{listaServicos:servicos})
    },
    sobre:(req, res) => {
        res.render('sobre')
    },
    contato:(req , res)=>{
        res.render('contato')
    }
}

module.exports = indexController