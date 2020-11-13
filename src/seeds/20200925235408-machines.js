'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const machinesArray = [];

    machinesArray.push({
      name: 'Trotadora',
      description: 'Maquina de ejercicio cardiovascular, simula trote en espacio abierto. Múltiples velocidades.',
      image: 'txmbg8s794toj6chdffi',
      tipo: 'Cardio',
      available: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    machinesArray.push({
      name: 'Remadora',
      description: 'Máquina de ejercicio remadora',
      image: 'rsh1frukkbxa7lap9lwg',
      tipo: 'Cardio',
      available: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    machinesArray.push({
      name: 'Leg Press',
      description: 'Prensa de piernas con carga de discos. Capacidad de 880 lbs con traba manual de seguridad y almacenamiento posterior de discos.',
      image: 'j8it1de3gae7eotcvxu5',
      tipo: 'Cardio',
      available: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    machinesArray.push({
      name: 'Bicicleta',
      description: 'Bicicleta horizontal, con programa de niveles.',
      image: 'maquinagraphic_zmiukz',
      tipo: 'Cardio',
      available: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    machinesArray.push({
      name: 'Escalador',
      description: 'Escalador con 33cm de rango de movimiento.',
      image: 'maquinagraphic_zmiukz',
      tipo: 'Cardio',
      available: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }); 

    machinesArray.push({
      name: 'Chest Press',
      description: 'Press de pecho con carga de discos de uso profesional con carga de 660 lbs y almacenamiento posterior de discos.',
      image: 'maquinagraphic_zmiukz',
      tipo: 'Tren Superior',
      available: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    machinesArray.push({
      name: 'Bicicleta Spinning',
      description: 'Bicicleta estática de spinning.',
      image: 'maquinagraphic_zmiukz',
      tipo: 'Cardio',
      available: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    machinesArray.push({
      name: 'Elíptica',
      description: 'Elíptica con sensor de frecuencia cardiaca y 20 programas de ejercicios.',
      image: 'maquinagraphic_zmiukz',
      tipo: 'Cardio',
      available: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    machinesArray.push({
      name: 'Hip Thrust',
      description: 'Máquina de glúteos con carga de discos. Con capacidad de carga de 300lbs. Máquina de alto tráfico con palanca de seguridad.',
      image: 'maquinagraphic_zmiukz',
      tipo: 'Tren Inferior',
      available: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('machines', machinesArray);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
