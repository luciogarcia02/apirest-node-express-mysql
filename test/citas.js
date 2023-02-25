const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('POST /citas/createCita', () => {
  it('Crea una nueva cita correctamente', async () => {
    var currentdate = new Date(); 
    const nuevaCita = {
      Dia: 20,
      Mes: 2,
      UsuarioId: 1,
      Hora: "12:00",
      Motivo: "psicologo",
      createdAt: currentdate,
      updatedAt: currentdate,
    };
    request(app)//trae toda la app
				.post('/citas/createCita')//enpoint a testear y get/post
				.send(nuevaCita)//lo que le envio por parametro
				.expect(201)
				.end(function(err, res){
					assert.equal(res.body, "success")
					if(err){
						done(err)
					}
					
					return done()
				})  
  });
  
});

describe('casos negativos', () => {
  it('No crea una cita porque el usuario no existe', async () => {
  var currentdate = new Date(); 
  const nuevaCita = {
    Dia: 20,
    Mes: 2,
    UsuarioId: 121212,
    Hora: "12:00",
    Motivo: "psicologo",
    createdAt: currentdate,
    updatedAt: currentdate,
  };
  request(app)//trae toda la app
      .post('/citas/createCita')//enpoint a testear y get/post
      .send(nuevaCita)//lo que le envio por parametro
      .expect(500)
      .end(function(err, res){
        assert.equal(res.body, "success")
        if(err){
          done(err)
        }
        
        return done()
      })  
  });
});