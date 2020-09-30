module.exports = (sequelize, DataTypes) => {
  const ocurre = sequelize.define('ocurre', {
    id_class: DataTypes.INTEGER,
    id_room: DataTypes.INTEGER,
  }, {});

  ocurre.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return ocurre;
};
