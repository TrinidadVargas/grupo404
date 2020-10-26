module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('health_profiles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    user_id: {
      type: Sequelize.INTEGER,
    },
    birth: {
      type: Sequelize.DATE,
    },
    level: {
      type: Sequelize.INTEGER,
    },
    gender: {
      type: Sequelize.INTEGER,
    },
    height: {
      type: Sequelize.FLOAT,
    },
    weight: {
      type: Sequelize.FLOAT,
    },
    fat_percentage: {
      type: Sequelize.FLOAT,
    },
    emergency_number: {
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

  down: (queryInterface) => queryInterface.dropTable('health_profiles'),
};
