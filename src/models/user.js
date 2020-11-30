const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    image: {
      type: DataTypes.STRING,
    },
  }, {
    hooks: {
      beforeSave: async (instance) => {
        if (instance.changed('password')) {
          /* eslint-disable-next-line no-param-reassign */
          instance.password = await bcrypt.hash(instance.password, 10);
        }
      },
    },
  });

  user.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    user.hasMany(models.conversation, {
      foreignKey: 'userId1',
    });
    user.hasMany(models.conversation, {
      foreignKey: 'userId2',
    });

    user.hasMany(models.appointment, {
      foreignKey: 'userId',
    });
    user.hasMany(models.appointment, {
      foreignKey: 'specialistId',
    });

    user.hasMany(models.user_machine, {
      foreignKey: 'userId',
      as: 'reservation',
    });
    
    user.hasMany(models.health_profile, {
      foreignKey: 'user_id',
    });

    // user.hasMany(models.event_inscription, {
    //   foreignKey: 'userId',
    // });

    // user.belongsToMany(models.event, {
    //   through: 'event_users',
    //   foreignKey: 'userId',
    // });

    user.belongsToMany(models.event, {
      through: 'event_inscriptions',
      foreignKey: 'userId',
    });
  };

  return user;
};
