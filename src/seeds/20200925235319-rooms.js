'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const roomArray = [];

    roomArray.push({
      gym_id: 1,
      type:'Sala Principal',
      capacity:20,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    roomArray.push({
      gym_id: 2,
      type:'Sala Mediana',
      capacity:15,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    roomArray.push({
      gym_id: 3,
      type:'Sala Pequeña',
      capacity:12,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return queryInterface.bulkInsert('rooms', roomArray);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
