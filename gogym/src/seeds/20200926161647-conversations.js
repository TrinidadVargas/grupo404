'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const conversationsArray = [];

    conversationsArray.push({
      userId1: 1,
      userId2: 2,
      state: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    conversationsArray.push({
      userId1: 1,
      userId2: 3,
      state: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('conversations', conversationsArray);
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
