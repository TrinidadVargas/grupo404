module.exports = (sequelize, DataTypes) => {
  const specialist = sequelize.define('specialist', {
    id_specialist: DataTypes.INTEGER,
    rol: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  }, {});

  specialist.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return specialist;
};
