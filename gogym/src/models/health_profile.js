module.exports = (sequelize, DataTypes) => {
  const health_profile = sequelize.define('health_profile', {
    user_id: DataTypes.INTEGER,
    birth: DataTypes.DATE,
    level: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    height: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    fat_percentage: DataTypes.FLOAT,
    emergency_number: DataTypes.INTEGER,
  }, {});

  health_profile.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return health_profile;
};
