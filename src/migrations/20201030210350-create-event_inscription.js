module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('event_inscriptions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    eventId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'events',
        key: 'id',
      },
      onDeleye: 'CASCADE',
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onDeleye: 'CASCADE',
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('event_inscriptions'),
};
