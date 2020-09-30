module.exports = (sequelize, DataTypes) => {
  const conversation = sequelize.define('conversation', {
    userId1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    state: {
      type: DataTypes.INTEGER,
    },
  }, {});

  conversation.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    conversation.belongsTo(models.user, {
      as: 'user1',
      foreignKey: {
        name: 'userId1',
        allowNull: false
      },
    } );
    conversation.belongsTo(models.user, {
      as: 'user2',
      foreignKey: {
        name: 'userId2',
        allowNull: false
      },
    } );
    conversation.hasMany(models.message);
  };

  return conversation;
};
