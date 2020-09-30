module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('memberships', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    user_id: {
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.INTEGER,
    },
    start: {
      type: Sequelize.DATE,
    },
    end: {
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

  down: (queryInterface) => queryInterface.dropTable('memberships'),
};
