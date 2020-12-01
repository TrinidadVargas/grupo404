module.exports = (sequelize, DataTypes) => {
  const user_machine = sequelize.define('user_machine', {
    userId: {
      type: DataTypes.INTEGER
    },
    machineId: { 
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE
    },
    duration: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.INTEGER
    },
  }, {});

  user_machine.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    user_machine.belongsTo(models.user, {
      as: 'user',
      foreignKey: {
        name: 'userId',
      },
    });
    
    user_machine.belongsTo(models.machines, {
      as: 'machine',
      foreignKey: {
        name: 'machineId',
      },
    });
  };

  return user_machine;
};
