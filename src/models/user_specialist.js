module.exports = (sequelize, DataTypes) => {
  const user_specialist = sequelize.define('user_specialist', {
    id_specialist: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    date: DataTypes.DATE,
  }, {});

  user_specialist.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return user_specialist;
};
