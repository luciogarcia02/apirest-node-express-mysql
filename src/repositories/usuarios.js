const {Usuario} = require('../../db/models/');

async function getUsers(){
    return await Usuario.findAll();
}

module.exports = {
    getUsers,
}