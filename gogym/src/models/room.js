module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    gym_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
  }, {});

  room.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return room;
};
