'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
   const messagesArray = [];

    messagesArray.push({
      conversationId: 1,
      senderId: 1,
      message: 'Hola! como estas?',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    messagesArray.push({
      conversationId: 1,
      senderId: 2,
      message: 'Bien! Como estas tu?',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    messagesArray.push({
      conversationId: 2,
      senderId: 1,
      message: 'Hola 3! como estas?',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    messagesArray.push({
      conversationId: 2,
      senderId: 3,
      message: 'Bien! Como estas tu 1?',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    

    return queryInterface.bulkInsert('messages', messagesArray);
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
