const UserController = {
  index:(req, res) => {
    res.render('index', { title: 'Ola Usuario'})
  }
}

module.exports = UserController