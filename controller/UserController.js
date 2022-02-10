const UserController = {
  cadastro:(req, res) => {
    res.render('user/cadastro')
  },
  login:(req, res) => {
    res.render('user/login')
  },
  sobre:(req, res) => {
    res.render('user/sobre')
  }
}

module.exports = UserController