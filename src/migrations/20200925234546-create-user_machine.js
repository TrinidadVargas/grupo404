module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user_machines', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    id_user: {
      type: Sequelize.INTEGER,
    },
    id_machine: {
      type: Sequelize.INTEGER,
    },
    time: {
      type: Sequelize.TIME,
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

  down: (queryInterface) => queryInterface.dropTable('user_machines'),
};
