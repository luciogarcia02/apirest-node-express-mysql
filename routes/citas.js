var express = require('express');
var router = express.Router();
var citas = require("../src/repositories/citas");


/* GET users listing. */
router.get('/', async function(req, res) {
  let dev = await citas.getCitas()
 
  res.json(dev);
});

router.get('/:id', async function(req, res) {
  let dev = await citas.getCitasById(req.params.id)
  res.json(dev);
});

router.get('/getCitasByUsuario/:id', async function(req, res) {
 
  let dev = await citas.getCitasByUsuarioId(req.params.id)
  res.json(dev);
});

router.post('/createCita', async function(req,res){
  let body = req.body;
  try{
    let ok = await citas.createCita(body.Dia,body.Mes,body.UsuarioId,body.Hora,body.Motivo);
    
  }catch(e){
    res.status(500)
  }
  if(ok){
    res.status(201)
  }else{
    res.status(500).json("El usuario no existe");
  }
})


module.exports = router;
