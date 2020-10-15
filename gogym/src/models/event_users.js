module.exports = (sequelize, DataTypes) => {
  const event_users = sequelize.define('event_users', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});

  event_users.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return event_users;
};
