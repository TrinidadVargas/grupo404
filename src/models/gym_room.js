module.exports = (sequelize, DataTypes) => {
  const gym_room = sequelize.define('gym_room', {
    gym_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
  }, {});

  gym_room.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return gym_room;
};
