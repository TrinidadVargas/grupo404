'use strict';

const bcrypt = require('bcrypt');

const password = 'admin';

const hash = bcrypt.hashSync(password, 10);


module.exports = {
  up: async (queryInterface, Sequelize) => {

    const usersArray = [];

    usersArray.push({
      name: 'Admin',
      lastname: 'Gogym',
      email: 'admin@gogym.cl',
      password: hash,
      rut: '11111111-1',
      user_type: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Entrenador',
      lastname: 'Gogym',
      email: 'entrenador@gogym.cl',
      password: hash,
      rut: '11111111-2',
      user_type: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Nutri',
      lastname: 'Cionista',
      email: 'nutricionista@gogym.cl',
      password: hash,
      rut: '11111111-1',
      user_type: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Cliente',
      lastname: 'Uno',
      email: 'cliente1@gogym.cl',
      password: hash,
      rut: '11111111-1',
      user_type: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Diego',
      lastname: 'Maradona',
      email: 'cliente2@gogym.cl',
      password: hash,
      rut: '11111111-3',
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
