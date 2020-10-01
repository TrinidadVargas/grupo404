'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const membershipsArray = [];

   membershipsArray.push({
    user_id: 1,
    type: 1,
    start:'2020-01-01',
    end:'2020-06-06',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  membershipsArray.push({
    user_id: 2,
    type: 1,
    start:'2020-01-01',
    end:'2020-12-12',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  membershipsArray.push({
    user_id: 3,
    type: 2,
    start:'2020-01-01',
    end:'2020-06-06',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return queryInterface.bulkInsert('memberships', membershipsArray);
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
