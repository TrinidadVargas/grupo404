module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('specialists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    id_specialist: {
      type: Sequelize.INTEGER,
    },
    rol: {
      type: Sequelize.INTEGER,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.TEXT,
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

  down: (queryInterface) => queryInterface.dropTable('specialists'),
};
