module.exports = (sequelize, DataTypes) => {
  const membership = sequelize.define('membership', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      notEmty: true,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      notEmty: true,}
      ,
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      notEmty: true,}
      ,
    end: {
      type: DataTypes.DATE,
      allowNull: false,
      notEmty: true,}
      ,
  }, {});

  membership.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return membership;
};
