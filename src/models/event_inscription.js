module.exports = (sequelize, DataTypes) => {
  const event_inscription = sequelize.define('event_inscription', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});

  event_inscription.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    event_inscription.belongsTo(models.user, {
      as: 'user',
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
    });
    event_inscription.belongsTo(models.event, {
      as: 'event',
      foreignKey: {
        name: 'eventId',
        allowNull: false
      },
    });
  };

  return event_inscription;
};
