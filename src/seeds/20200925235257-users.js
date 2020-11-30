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
      image: 'default-user_nmftx2',
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
      image: 'default-user_nmftx2',
      createdAt: new Date(),
      updatedAt: new Date(),
    });


    usersArray.push({
      name: 'Luis',
      lastname: 'Arancibia',
      email: 'entrenador1@gogym.cl',
      password: hash,
      rut: '11111111-3',
      user_type: 2,
      image: 'dpersonal4_sz1w0t',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Miguel',
      lastname: 'Gonzalez',
      email: 'entrenador2@gogym.cl',
      password: hash,
      rut: '11111111-4',
      user_type: 2,
      image: 'personal3_fclvc1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Paul',
      lastname: 'Owen',
      email: 'entrenador3@gogym.cl',
      password: hash,
      rut: '11111111-5',
      user_type: 2,
      image: 'https://res.cloudinary.com/divxz0cz4/image/upload/v1606313188/entrenadores/persinal4_erjyc3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Jessica',
      lastname: 'Espinoza',
      email: 'entrenador4@gogym.cl',
      password: hash,
      rut: '11111111-6',
      user_type: 2,
      image: 'personal2_rgwkwt',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Nutri',
      lastname: 'Cionista',
      email: 'nutricionista@gogym.cl',
      password: hash,
      rut: '11111111-7',
      user_type: 3,
      image: 'default-user_nmftx2',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Alejandra',
      lastname: 'Garrido',
      email: 'nutricionista1@gogym.cl',
      password: hash,
      rut: '11111112-1',
      user_type: 3,
      image: 'nutri1_asuuei',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Claudia',
      lastname: 'Rodriguez',
      email: 'nutricionista2@gogym.cl',
      password: hash,
      rut: '11111112-2',
      user_type: 3,
      image: 'nutri2_tfgb0l',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'María',
      lastname: 'Banto',
      email: 'nutricionista3@gogym.cl',
      password: hash,
      rut: '11111112-3',
      user_type: 3,
      image: 'nutri4_i909ev',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Cliente',
      lastname: 'Uno',
      email: 'cliente1@gogym.cl',
      password: hash,
      rut: '11111111-8',
      user_type: 1,
      image: 'default-user_nmftx2',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    usersArray.push({
      name: 'Diego',
      lastname: 'Maradona',
      email: 'cliente2@gogym.cl',
      password: hash,
      rut: '11111111-9',
      user_type: 1,
      image: 'default-user_nmftx2',
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
