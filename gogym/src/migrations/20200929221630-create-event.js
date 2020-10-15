module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    days: {
      type: Sequelize.STRING,
    },
    startsAt: {
      type: Sequelize.TIME,
    },
    endsAt: {
      type: Sequelize.TIME,
    },
    roomId:{
      type: Sequelize.INTEGER,
      references: {
        model: 'rooms',
        key: 'id'
      },
      onDelete: 'CASCADE'
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

  down: (queryInterface) => queryInterface.dropTable('events'),
};
