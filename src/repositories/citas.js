const {Cita} = require('../../db/models/');
const db = require('../../db/models');


async function getCitas(){
    return await Cita.findAll(
        { include: db.Usuario,
        }
    );
}
async function getCitasById(id){
    return await Cita.findByPk(id,
        { include: db.Usuario,
        }
    );
}
async function getCitasByUsuarioId(id){
    return await Cita.findAll(

        {
            where:{
                UsuarioId : id
                },
             include:  db.Usuario ,
        }
    );
}

async function getCitasByUsuarioId(id){
    return await Cita.findOne(

        {
            where:{
                UsuarioId : id
                },
             include:  db.Usuario ,
        }
    );
}

module.exports = {
    getCitas,
    getCitasById,
    getCitasByUsuarioId,
}