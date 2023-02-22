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


/*DELETE delete user*/
module.exports = router;
