module.exports = (sequelize, DataTypes) => {
  const machines = sequelize.define('machines', {
    gym_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    available: DataTypes.BOOLEAN,
  }, {});

  machines.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return machines;
};
