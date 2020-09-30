module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('gyms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    phone: {
      type: Sequelize.INTEGER,
    },
    adress: {
      type: Sequelize.STRING,
    },
    capacity: {
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

  down: (queryInterface) => queryInterface.dropTable('gyms'),
};
