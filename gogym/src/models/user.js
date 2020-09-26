module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rut: DataTypes.STRING,
    user_type: DataTypes.INTEGER,
  }, {});

  user.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return user;
};
