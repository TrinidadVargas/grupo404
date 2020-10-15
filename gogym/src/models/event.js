module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description:{
      type: DataTypes.TEXT,
    },
    days:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    startsAt:{
      type: DataTypes.TIME,
      allowNull: false, 
      validate: {
        notEmpty: true,
      },
    },
    endsAt: {
      type: DataTypes.TIME,
    },
    roomId:{
      type: DataTypes.INTEGER,
    },
  }, {});

  event.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    //event.belongsTo(models.room); 
    //event.hasMany(models.room, { onDelete: 'cascade', hooks: true })
    event.belongsTo(models.room, { foreignKey: 'roomId'}); 
    event.belongsToMany(models.user, { 
      through: 'event_users',
      foreignKey: 'userId',
    });
  };


  return event;
};
