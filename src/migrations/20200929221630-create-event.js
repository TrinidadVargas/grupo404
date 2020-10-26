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


// module.exports = {
//   up: (queryInterface, Sequelize) => queryInterface.createTable('event_users', {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: Sequelize.INTEGER,
//     },

//     eventId: {
//       type: Sequelize.INTEGER,
//       references: {
//         model: 'events',
//         key: 'id',
//       },
//       onDeleye: 'CASCADE',
//     },
//     userId: {
//       type: Sequelize.INTEGER,
//       references: {
//         model: 'users',
//         key: 'id',
//       },
//       onDeleye: 'CASCADE',
//     },

//     createdAt: {
//       allowNull: false,
//       type: Sequelize.DATE,
//     },
//     updatedAt: {
//       allowNull: false,
//       type: Sequelize.DATE,
//     },
//   }),

//   down: (queryInterface) => queryInterface.dropTable('event_users'),
// };
