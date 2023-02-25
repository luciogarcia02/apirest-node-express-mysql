const {Cita} = require('../../db/models/');
const db = require('../../db/models');
const usersRepo = require('./usuarios');


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

async function createCita(Dia,Mes,UsuarioId,Hora,Motivo){
    let ok = false;
    let citaCreate = {
        Dia,
        Mes,
        UsuarioId,
        Hora,
        Motivo,
    }
    if(usersRepo.existeId(citaCreate.UsuarioId)){
        try{
            await Cita.create(citaCreate);  
            ok= true     
        }catch(e){
       
        }
    }
   
    return ok;
}

module.exports = {
    getCitas,
    getCitasById,
    getCitasByUsuarioId,
    createCita,
}