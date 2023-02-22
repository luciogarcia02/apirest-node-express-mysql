const {Usuario} = require('../../db/models/');

async function getUsers(){
    return await Usuario.findAll();
}

async function createUser(usuarioCreate){
    try{
        Usuario.create(usuarioCreate);
    }catch(e){
        console.log(e);
    }
        return true;
}

module.exports = {
    getUsers,
    createUser,
}