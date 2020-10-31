module.exports = (sequelize, DataTypes) => {
  const health_profile = sequelize.define('health_profile', {

    user_id:{
      type: DataTypes.INTEGER
    },
    birth:{
      type: DataTypes.DATE
    },
    level: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    height: {
      type: DataTypes.FLOAT
    },
    weight: {
      type: DataTypes.FLOAT
    },
    fat_percentage: {
      type: DataTypes.FLOAT
    },
    emergency_number: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    }

  }, {});

  health_profile.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return health_profile;
};