module.exports = (sequelize, DataTypes) => {
  const user_machine = sequelize.define('user_machine', {
    id_user: DataTypes.INTEGER,
    id_machine: DataTypes.INTEGER,
    time: DataTypes.TIME,
  }, {});

  user_machine.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return user_machine;
};
