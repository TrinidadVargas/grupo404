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
      photo: 'https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/11052374_951631348210489_5291075104142319074_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=JGl5JiGoyHMAX8urmDj&_nc_ht=scontent.fscl1-1.fna&oh=1977815682c7fbcdbc0d2af0fb15e1d0&oe=5F997B11',
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
      photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.0-9/54798460_1283194645162815_818019101828972544_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=NOwRWrYR_F0AX8HUmmR&_nc_ht=scontent-scl2-1.xx&oh=f42e061e62cb051d4e1d7cd2f694d037&oe=5F9677FC',
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
      photo: '',
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
