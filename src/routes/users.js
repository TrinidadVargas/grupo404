const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'name',
  'lastname',
  'email',
  'password',
  'photo',
  'rut',
  'user_type',
];

router.param('id', async (id, ctx, next) => {
  const user = await ctx.orm.user.findByPk(id);
  if (!user) ctx.throw(404);
  ctx.state.user = user;
  return next();
});

router.get('users', '/', async (ctx) => {
  const users = await ctx.orm.user.findAll();
  await ctx.render('users/index', {
    users,
    userPath: id => ctx.router.url('user', id),
    editUserPath: id => ctx.router.url('users-edit', id),
    deleteUserPath: id => ctx.router.url('users-delete', id),
    newUserPath: ctx.router.url('users-new'),
    usersTrainersPath: ctx.router.url('users-entrenadores'),
    usersNutriPath: ctx.router.url('users-nutricionistas'),
    chartsPath: ctx.router.url('users-charts'),
    personalusersPath: ctx.router.url('users-personal'),
    adminuserPath: id => ctx.router.url('users-admin', id),
  
  });
});



router.get('users-new', '/new', async (ctx) => {
  const user = ctx.orm.user.build();
  let isAdmin = 0;
  if (ctx.state.currentUser && ctx.state.currentUser.user_type == 0) {
    isAdmin = 1;
  }
  return await ctx.render('users/new', {
    isAdmin,
    user,
    submitUserPath: ctx.router.url('users-create'),
  });
});

router.get('users-edit', '/:id/edit', async (ctx) => {
  const { user } = ctx.state;
  if (ctx.state.currentUser && ctx.state.currentUser.user_type == 0) {
    isAdmin = true;
  }
  await ctx.render('users/edit', {
    user,
    submitUserPath: ctx.router.url('users-update', { id: user.id }),
    isAdmin,
  });
});

router.post('users-create', '/', async (ctx) => {
  const user = ctx.orm.user.build(ctx.request.body);
  try {
    await user.save({ fields: PERMITTED_FIELDS });
    ctx.redirect(ctx.router.url('events'));
  } catch (error) {
    console.log(error);
    await ctx.render('users/new', {
      user,
      errors: error.errors,
      isAdmin: false,
      submitUserPath: ctx.router.url('users-create'),
    });
  }
});

router.patch('users-update', '/:id', async (ctx) => {
  const { user } = ctx.state;
  try {
    const params = ctx.request.body;
    if (!params.password) delete params.password;
    await user.update(params, { fields: PERMITTED_FIELDS });
    //await user.update(ctx.request.body );
    ctx.redirect(ctx.router.url('users'));
  } catch (error) {
    await ctx.render('users/edit', {
      user,
      errors: error.errors,
      submitUserPath: ctx.router.url('users-update', { id: user.id }),
    });
  }
});

router.get('users-entrenadores', '/entrenadores', async (ctx) => {
  const trainers = ctx.orm.user.findAll();
  return await ctx.render('users/entrenadores', {
    trainers,
    usersTrainersPath: ctx.router.url('users-entrenadores'),
  });
});

router.get('users-nutricionistas', '/nutricionistas', async (ctx) => {
  const trainers = ctx.orm.user.findAll();
  return await ctx.render('users/nutricionistas', {
    trainers,
    usersNutriPath: ctx.router.url('users-nutricionistas'),
  });
});

router.get('user-healthprofile', '/:id/healthprofile', async (ctx) => {
  const { user } = ctx.state;
  const healthprofiles = await user.getHealth_profiles();
  let lastProfile = null;
  if (healthprofiles.length != 0) {
    lastProfile = healthprofiles[healthprofiles.length - 1];
  }
  return await ctx.render('users/healthprofile', {
    user,
    healthprofiles,
    lastProfile,
    profilePath: id => ctx.router.url('healthprofile', id),
    createProfilePath: ctx.router.url('healthprofiles-create'),
  });
});


router.get('users-charts', '/charts', async (ctx) => {
  const entrenadores = await ctx.orm.user.findAll({
    where: {
      user_type: 2
    }
  });
  const nutricionistas = await ctx.orm.user.findAll({
    where: {
      user_type: 3
    }
  });
  const clientes = await ctx.orm.user.findAll({
    where: {
      user_type: 1
    }
  });
  return ctx.render('users/charts', {
    entrenadores,
    nutricionistas,
    clientes,
    chartsPath: ctx.router.url('users-charts'),
  });
});


router.get('users-personal', '/personal', async (ctx) => {
  const users = await ctx.orm.user.findAll();
  await ctx.render('users/personal', {
    users,
    personalusersPath: ctx.router.url('users-personal'),
    editUserPath: id => ctx.router.url('users-edit', id),
    deleteUserPath: id => ctx.router.url('users-delete', id),
  });
});

router.get('users-admin', '/:id/admin', async (ctx) => {
  const { user } = ctx.state;
  // eslint-disable-next-line global-require
  const { Op } = require('sequelize');
  const conversations = await ctx.orm.conversation.findAll({
    where: {
      [Op.or]: [
        { userId1: user.id },
        { userId2: user.id },
      ],
    },
    include: ['user1', 'user2'],
  });
  return ctx.render('users/admin', {
    user,
    conversations,
    conversationPath: (id) => ctx.router.url('conversation', id),
    newConversationPath: ctx.router.url('conversations-new'),
    deleteConversationPath: (id) => ctx.router.url('conversations-delete', id),
    events: await user.getEvents(),
  });
});

router.get('user', '/:id', async (ctx) => {
  const { user } = ctx.state;
  // eslint-disable-next-line global-require
  const { Op } = require('sequelize');
  const conversations = await ctx.orm.conversation.findAll({
    where: {
      [Op.or]: [
        { userId1: user.id },
        { userId2: user.id },
      ],
    },
    include: ['user1', 'user2'],
  });
  return ctx.render('users/show', {
    user,
    conversations,
    conversationPath: (id) => ctx.router.url('conversation', id),
    healthprofilePath: ctx.router.url('user-healthprofile', user.id),
    newConversationPath: ctx.router.url('conversations-new'),
    deleteConversationPath: (id) => ctx.router.url('conversations-delete', id),
    events: await user.getEvents(),
    profilesPath: ctx.router.url('user-healthprofile', user.id),

  });
});

router.del('users-delete', '/:id', async (ctx) => {
  const { user } = ctx.state;
  await user.destroy();
  ctx.redirect(ctx.router.url('users'));
});

module.exports = router;
