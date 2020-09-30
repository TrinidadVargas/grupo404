'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const usersArray = [];

    usersArray.push({
      name: 'Trinidad',
      lastname: 'Vargas',
      email: 'mtvargas1@uc.cl',
      password: 'admin',
      rut: '19892520-9',
      user_type: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Pilar',
      lastname: 'Vargas',
      email: 'pilarvargas@uc.cl',
      password: 'admin',
      rut: '19892521-9',
      user_type: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Toño',
      lastname: 'Vargas',
      email: 'joseantonio_vargas@gmail.com',
      password: 'admin',
      rut: '19892522-9',
      user_type: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('users', usersArray);
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
