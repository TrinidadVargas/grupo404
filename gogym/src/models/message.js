module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    conversationId: {
      type: DataTypes.INTEGER,
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {});

  message.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    message.belongsTo(models.conversation);
  };

  return message;
};
