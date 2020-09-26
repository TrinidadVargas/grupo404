module.exports = (sequelize, DataTypes) => {
  const gym = sequelize.define('gym', {
    phone: DataTypes.INTEGER,
    adress: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  }, {});

  gym.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return gym;
};
