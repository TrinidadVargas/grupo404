const KoaRouter = require('koa-router');
// const db = require('../models');

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

router.param('id', async (id, ctx, next) =>{
  const user = await ctx.orm.user.findByPk(id);
  if (!user) ctx.throw (404);
  ctx.state.user = user;
  return next();
});

router.get('users', '/', async (ctx) => {
  const users = await ctx.orm.user.findAll();
  await ctx.render('users/index', {
    users,
    userPath: id => ctx.router.url('user', id),
    newUserPath: ctx.router.url('users-new'),
  });
});

router.get('users-new', '/new', (ctx) => {
  const user = ctx.orm.user.build();
  return ctx.render('users/new', {
    user,
    createUserPath: ctx.router.url('users-create'),
  });
});

router.post('users-create', '/', async (ctx) => {
  const user = ctx.orm.user.build(ctx.request.body);
  try {
    await user.save({fields: PERMITTED_FIELDS});
    ctx.redirect(ctx.router.url('users')); 
  } catch (error) {
    await ctx.render('users/new', {
      user,
      errors: error.errors,
      createUserPath: ctx.router.url('users-create'),
    });
  }
});

router.get('user', '/:id', async (ctx) =>{
  const {user} = ctx.state;
  const { Op } = require("sequelize");
  const conversations = await ctx.orm.conversation.findAll({
    where: {
      [Op.or]: [
        { userId1: user.id },
        { userId2: user.id },
      ] 
    },
    include: ['user1', 'user2'],
    });
  return ctx.render('users/show', {
    user,
    conversations,
    conversationPath: (id) => ctx.router.url('conversation', id),
    newConversationPath: ctx.router.url('conversations-new'),
    events: await user.getEvents(),
    // newConversationPath: (id) => ctx.router.url('')
  });
});

module.exports = router;