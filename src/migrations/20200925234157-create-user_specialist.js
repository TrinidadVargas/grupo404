module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user_specialists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    id_specialist: {
      type: Sequelize.INTEGER,
    },
    id_user: {
      type: Sequelize.INTEGER,
    },
    date: {
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

  down: (queryInterface) => queryInterface.dropTable('user_specialists'),
};
