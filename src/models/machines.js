module.exports = (sequelize, DataTypes) => {
  const machines = sequelize.define('machines', {

    gym_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    available: {
      type: DataTypes.BOOLEAN,
    },
    image: {
      type: DataTypes.STRING,
    },
    tipo: {
      type: DataTypes.STRING,
    },
  }, {});

  machines.associate = function associate(models) {
    machines.hasMany(models.user_machine);
    // associations can be defined here. This method receives a models parameter.
  };

  return machines;
};
