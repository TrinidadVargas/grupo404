'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const eventsArray = [];

    eventsArray.push({
      name: 'Crossfit',
      description:'Dirigidas a todas las personas todas las edades, Esenciales de nuestro centro, el método central, entregan una preparación física general y completa. Desarrollando las 10 habilidades físicas en equilibrio, a través de entrenamiento cardiovascular con el propio peso corporal, ejercicios de gimnasia con implementos, y ejercicios de levantamiento de pesas, ejecutando entrenamientos originales de método Crossfit.',
      days: 'Lunes, Miércoles y Viernes',
      startsAt: '10:00:00',
      endsAt: '11:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    eventsArray.push({
      name: 'Ashtanga Yoga',
      description:'Clases guiadas de la primera serie de ashtanga vinyasa yoga, sistema que combina postura, respiración y movimiento sincronizado.',
      days: 'Martes y Jueves',
      startsAt: '19:00:00',
      endsAt: '20:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    });


    return queryInterface.bulkInsert('events', eventsArray);
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
