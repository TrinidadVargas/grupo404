const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'userId1',
  'userId2',
];

router.param('id', async (id, ctx, next) =>{
  const conversation = await ctx.orm.conversation.findByPk(id);
  if (!conversation) ctx.throw (404);
  ctx.state.conversation = conversation;
  return next();
});

router.get('conversations-new', '/new', (ctx) => {
  return ctx.render('conversations/new', {
    createConversationPath: ctx.router.url('conversations-create'),
  });
});

router.post('conversations-create', '/', async (ctx) => {
  const conversation = ctx.orm.conversation.build(ctx.request.body);
  console.log(ctx.request.body);

  try {
    await conversation.save({fields: PERMITTED_FIELDS});
    ctx.redirect(ctx.router.url('users'));
  } catch (error) {
    ctx.redirect(ctx.router.url('users')); 
  }
});

router.get('conversation', '/:id', async (ctx) =>{
  const {conversation} = ctx.state;
  const { Op } = require("sequelize");
  const users = await ctx.orm.user.findAll({
    where: {
      [Op.or]: [
        { id: conversation.userId1 },
        { id: conversation.userId2 },
      ] 
    },
  });
  const messages = await conversation.getMessages();
  return ctx.render('conversations/show', {
    conversation,
    users,
    messages,
    newMessagePath: ctx.router.url('messages-new'),
    createMessagePath: ctx.router.url('messages-create'),
  });
  
});

module.exports = router;