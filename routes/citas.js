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



module.exports = router;
