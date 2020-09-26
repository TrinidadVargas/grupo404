module.exports = (sequelize, DataTypes) => {
  const chat = sequelize.define('chat', {
    user_id_1: DataTypes.INTEGER,
    user_id_2: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    time: DataTypes.DATE,
  }, {});

  chat.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return chat;
};
