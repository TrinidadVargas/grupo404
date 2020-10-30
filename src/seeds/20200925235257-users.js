'use strict';
// bcrypt = require('bcrypt');
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const usersArray = [];

    usersArray.push({
      name: 'Admin',
      lastname: 'Istrador',
      email: 'admin@gogym.cl',
      password: await bcrypt.hash('123456', 10),
      rut: '11111111-1',
      user_type: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Entre',
      lastname: 'Nador',
      email: 'entrenador@gogym.cl',
      password: await bcrypt.hash('123456', 10),
      rut: '11111111-1',
      user_type: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Nuti',
      lastname: 'Cionista',
      email: 'nutricionista@gogym.cl',
      password: await bcrypt.hash('123456', 10),
      rut: '11111111-1',
      user_type: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Cliente',
      lastname: '1',
      email: 'cliente@gogym.cl',
      password: await bcrypt.hash('123456', 10),
      rut: '11111111-1',
      user_type: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Cliente',
      lastname: '2',
      email: 'cliente@gogym.cl',
      password: await bcrypt.hash('123456', 10),
      rut: '11111111-1',
      user_type: 1,
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
