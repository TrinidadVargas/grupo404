'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const roomArray = [];

    roomArray.push({
      gym_id: 1,
      type:'Spinning',
      capacity:20,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    roomArray.push({
      gym_id: 2,
      type:'TRX',
      capacity:15,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    roomArray.push({
      gym_id: 3,
      type:'Yoga',
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
