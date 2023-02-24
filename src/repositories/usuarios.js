const {Usuario} = require('../../db/models/');

async function getUsers(){
    return await Usuario.findAll();
}

async function existeId(id){
    let usuario = await Usuario.findByPk(id)
    if(usuario){
        return usuario;
    }else{
        return false;
    }
}

async function createUser(usuarioCreate){
    try{
        Usuario.create(usuarioCreate);
    }catch(e){
        console.log(e);
    }
        return true;
}

async function deleteById(id){
    let usuborr = await Usuario.destroy({
        where: {
          id: id
        }
      });
      return usuborr;
}

module.exports = {
    getUsers,
    createUser,
    existeId,
    deleteById,
}