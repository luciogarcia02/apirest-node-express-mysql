var express = require('express');
var router = express.Router();
var users = require("../src/repositories/usuarios");
/* GET users listing. */
router.get('/hola', async function(req, res) {
  let dev = await users.getUsers()
  res.json(dev);
});

module.exports = router;
