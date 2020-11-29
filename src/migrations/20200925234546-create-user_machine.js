module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user_machines', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },

    machineId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'machines',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },

    date: {
      allowNull: false,
      type: Sequelize.DATE,
    },

    duration: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },

    status: {
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

  down: (queryInterface) => queryInterface.dropTable('user_machines'),
};
