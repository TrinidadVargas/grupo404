module.exports = (sequelize, DataTypes) => {
  const appointment = sequelize.define('appointment', {
    specialistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    appttype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    place: {
      type: DataTypes.STRING,
    },
  }, {});

  appointment.associate = function associate(models) {

    appointment.belongsTo(models.user, {
      as: 'specialist',
      foreignKey: {
        name: 'specialistId',
        allowNull: false
      },
    });

    appointment.belongsTo(models.user, {
      as: 'user',
      foreignKey: {
        name: 'userId',
      },
    });


    // associations can be defined here. This method receives a models parameter.
  };

  return appointment;
};
