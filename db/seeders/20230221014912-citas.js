'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    var currentdate = new Date(); 
      await queryInterface.bulkInsert('cita', [{
        Dia: 20,
        Mes: 2,
        UsuarioId: 3,
        Hora: "12:00",
        Motivo: "Furbo",
        createdAt: currentdate,
        updatedAt: currentdate,
      },
      {
        Dia: 20,
        Mes: 2,
        UsuarioId: 2,
        Hora: "12:00",
        Motivo: "Furbo",
        createdAt: currentdate,
        updatedAt: currentdate,
      }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
