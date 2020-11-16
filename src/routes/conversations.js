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
  conversation.messages = await conversation.getMessages();
  messages = conversation.messages;
  return ctx.render('conversations/show', {
    conversation,
    users,
    messages,
    newMessagePath: ctx.router.url('messages-new'),
    createMessagePath: ctx.router.url('messages-create'),
  });
  
});

router.get('conversation-msgs', '/:id/msgs', async (ctx) => {
  const { conversation } = ctx.state;
  const msgs = await conversation.getMessages()
  ctx.body = msgs.map(({ senderId, createdAt, message, id }) => ({ senderId, createdAt, message, id}));
});

router.post('conversation-send-msg', '/:id/msgs', async (ctx) => {
  const { currentUser, conversation, message} = ctx.state;
  const { userId } = ctx.request.body;
  const user = userId ? (await ctx.orm.user.findByPk(userId)) : currentUser;
  if (!user) ctx.throw(422);
  const msg = {
    senderId: ctx.request.body.senderId, 
    message: ctx.request.body.message, 
    conversationId: ctx.request.body.conversationId};
  const newMessage = ctx.orm.message.build(msg);
  await newMessage.save();
  switch (ctx.accepts(['html', 'json'])) {
    case 'html':
      ctx.redirect(ctx.router.url('conversation', conversation.id));
      break;
    case 'json':
      ctx.status = 201;
      ctx.body = { newMessage: 'Message added' };
      break;
    default:
      ctx.throw(406);
      break;
  }
});


module.exports = router;