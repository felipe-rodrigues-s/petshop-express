let modelServico = require("../model/servico.json")

const servicoController = {
    listaServicos:(req,res)=>{
        res.render('servicos');
    },
    criarServico:(req,res)=>{
        let servico =req.body
        modelServico.push(servico)
        res.redirect('/home')
    }
}

module.exports = servicoController