module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('chats', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    user_id_1: {
      type: Sequelize.INTEGER,
    },
    user_id_2: {
      type: Sequelize.INTEGER,
    },
    message: {
      type: Sequelize.TEXT,
    },
    time: {
      type: Sequelize.DATE,
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

  down: (queryInterface) => queryInterface.dropTable('chats'),
};
