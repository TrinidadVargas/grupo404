module.exports = (sequelize, DataTypes) => {
  const membership = sequelize.define('membership', {
    user_id: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
  }, {});

  membership.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return membership;
};
