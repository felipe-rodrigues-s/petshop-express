const pet = require('../model/pets.json')

const PetsController = {
  index:(req, res) => {
   
    res.render('index',{ title: 'o pets estão no console do servidor'}, console.log(pet[1]))
  }
}

module.exports = PetsController
