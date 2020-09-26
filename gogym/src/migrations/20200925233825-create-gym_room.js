module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('gym_rooms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    gym_id: {
      type: Sequelize.INTEGER,
    },
    room_id: {
      type: Sequelize.INTEGER,
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

  down: (queryInterface) => queryInterface.dropTable('gym_rooms'),
};
