const pet = require('../model/pets.json')

const PetsController = {
  // index:(req, res) => {
  //  res.render({ title: 'o pets estão no console do servidor'})
  // },
  criaPet:(req, res) => {
    let servico = req.body
    pet.push(servico)
    res.redirect("/")
  }
}

module.exports = PetsController
