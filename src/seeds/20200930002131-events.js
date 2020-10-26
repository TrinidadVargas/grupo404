'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const ROOM_NAME = 'Sala Principal';
    const EVENTS_QUANTITY = 2;

    const rms = await queryInterface.sequelize.query(
      `SELECT id FROM rooms WHERE type='${ROOM_NAME}'`
    );
    const { id: roomId } = rms[0][0];

    const eventsArray = [];

    eventsArray.push({
      roomId,
      name: 'Crossfit',
      description:'Dirigidas a todas las personas todas las edades, Esenciales de nuestro centro, el método central, entregan una preparación física general y completa. Desarrollando las 10 habilidades físicas en equilibrio, a través de entrenamiento cardiovascular con el propio peso corporal, ejercicios de gimnasia con implementos, y ejercicios de levantamiento de pesas, ejecutando entrenamientos originales de método Crossfit.',
      days: 'Lunes, Miércoles y Viernes',
      startsAt: '10:00',
      endsAt: '11:00',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    eventsArray.push({
      roomId,
      name: 'TRX',
      description:'Este tipo de entrenamiento en suspensión fortalece principalmente la zona del “Core” mediante movimientos funcionales y posiciones dinámicas. Además de ofrecer una cantidad de movimientos intensos que se concentran específicamente en los abdominales, también se integra un fortalecimiento significativo de la sección media del cuerpo trabajando espalda, hombros, pecho, cadera y piernas.',
      days: 'Lunes, Miércoles y Viernes',
      startsAt: '18:30',
      endsAt: '19:30',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    eventsArray.push({
      roomId,
      name: 'Ashtanga Yoga',
      description:'Clases guiadas de la primera serie de ashtanga vinyasa yoga, sistema que combina postura, respiración y movimiento sincronizado.',
      days: 'Martes y Jueves',
      startsAt: '19:00',
      endsAt: '20:00',
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
