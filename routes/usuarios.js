var express = require('express');
var router = express.Router();
var users = require("../src/repositories/usuarios");
/* GET users listing. */
router.get('/', async function(req, res) {
  let dev = await users.getUsers()
  res.json(dev);
});


/*POST create user*/
router.post('/create',async function(req,res){
  let usuarioCreate = {}
  usuarioCreate.firstName="Fabian";
  usuarioCreate.lastName="Alonso";  
  usuarioCreate.email="arqalon@gmail.com";

  await users.createUser(usuarioCreate);

    res.status(200);
 
});

// devuelve false o el usuario
router.get('/existe/:id', async function(req, res) {
  let dev = await users.existeId(req.params.id)
  res.json(dev);
});

/*DELETE delete user by id*/
router.get('/deleteById/:id', async function(req,res){
  if(users.existeId(req.params.id)){
    await users.deleteById(req.params.id);
    res.json("succes");
  }else{
    res.status(404)
  }
});

module.exports = router;
