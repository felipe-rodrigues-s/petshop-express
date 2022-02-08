const pet = require('../model/pets.json')
const PetsController = {
  index:(req, res) => {
    res.render('index', { title: 'meus pets'}, console.log(pet))
  }
}

module.exports = PetsController
