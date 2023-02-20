'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    var currentdate = new Date(); 
     await queryInterface.bulkInsert('Usuarios', [{
        firstName: 'Mora',
        lastName: 'Mangone',
        email:"moramangone2@gmail.com",
        createdAt: currentdate,
        updatedAt: currentdate,
        
      }], {});

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
