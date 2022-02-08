const IndexController ={
  index: (req, res, next)=>{
    res.render('index', { title: 'Bora Codar'});
  }
}

module.exports = IndexController;