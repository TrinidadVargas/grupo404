module.exports = (sequelize, DataTypes) => {
  const event_user = sequelize.define('event_user', {
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});

  event_user.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return event_user;
};
