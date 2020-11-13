module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    gym_id:{
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
        isInt: true,
        max: 30,
        min: 5,
      },
    }
  }, {});

  room.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    //room.hasMany(models.event, { onDelete: 'cascade', hooks: true });
    room.hasMany(models.event);
    room.belongsToMany(models.user, {
       through: 'room_users',
       foreignKey: 'roomId',
    });
  };

  return room;
};
