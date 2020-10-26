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
   const machinesArray = [];
   machinesArray.push({
    gym_id: 1,
    name: 'Trotadora',
    description: 'Maquina de ejercicio cardiovascular, simula trote en espacio abierto. Múltiples velocidades.',
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
   });

   machinesArray.push({
    gym_id: 1,
    name: 'Bicicleta',
    description: 'Bicicleta horizontal, con programa de niveles.',
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
   });
   
   machinesArray.push({
    gym_id: 1,
    name: 'Bicicleta',
    description: 'Bicicleta estática de spinning.',
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
   });  
   
   machinesArray.push({
    gym_id: 1,
    name: 'Elíptica',
    description: 'Elíptica con sensor de frecuencia cardiaca y 20 programas de ejercicios.',
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
   }); 

   machinesArray.push({
    gym_id: 1,
    name: 'Escalador',
    description: 'Escalador con 33cm de rango de movimiento.',
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
   }); 

   machinesArray.push({
    gym_id: 1,
    name: 'Hip Thrust',
    description: 'Máquina de glúteos con carga de discos. Con capacidad de carga de 300lbs. Máquina de alto tráfico con palanca de seguridad.',
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
   }); 
   machinesArray.push({
    gym_id: 1,
    name: 'Chest Press',
    description: 'Press de pecho con carga de discos de uso profesional con carga de 660 lbs y almacenamiento posterior de discos.',
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
   }); 
  
   machinesArray.push({
    gym_id: 1,
    name: 'Leg Press',
    description: 'Prensa de piernas con carga de discos. Capacidad de 880 lbs con traba manual de seguridad y almacenamiento posterior de discos.',
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
  }
};
