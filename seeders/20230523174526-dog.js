'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Seed commands

    const date = new Date()

    await queryInterface.bulkInsert('Dogs', [{
      name: 'Bailey',
      breed: 'Black Lab',
      age: 10, 
      createdAt: date,
      updatedAt: date,
    }])

  },

  async down (queryInterface, Sequelize) {
    // Commands to revert seed
    
    await queryInterface.bulkDelete('Dogs', null, {})

  }
};