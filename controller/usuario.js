
const usuarioController = {
    cadastro:(req,res)=>{
       res.render('users/cadastro') 
    },
    login:(req,res)=>{
        res.render('users/login') 
    }
  
}
module.exports= usuarioController