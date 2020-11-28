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

router.get('conversations-new', '/new', async (ctx) => {
  let users = []
  const { Op } = require("sequelize");
  if (ctx.state.currentUser) {
    const userId = ctx.state.currentUser.id;
    const userType = ctx.state.currentUser.user_type;
    if (userType == 1) {
      users = await ctx.orm.user.findAll({
        where: {
          user_type: {[Op.ne]: 1, },
        },
        attributes: ['id', 'name', 'lastname'],
      });
    } else {
      users = await ctx.orm.user.findAll({
        // attributes: ['id', 'name', 'lastname'],
        where: {
          id: { [Op.ne]: userId, }
        }
      });
    }
  }
  return ctx.render('conversations/new', {
    users,
    createConversationPath: ctx.router.url('conversations-create'),
  });
});

router.post('conversations-create', '/', async (ctx) => {
  const conversation = ctx.orm.conversation.build(ctx.request.body);
  console.log(ctx.request.body);

  try {
    await conversation.save({fields: PERMITTED_FIELDS});
    ctx.redirect(ctx.router.url('conversation', conversation.id));
  } catch (error) {
    ctx.redirect(ctx.router.url('conversation', conversation.id)); 
  }
});

router.get('conversations', '/', async (ctx) => {
  let conversations = [];
  let userId = -1;
  if (ctx.state.currentUser) {
    userId = ctx.state.currentUser.id;
    const { Op } = require('sequelize');
    conversations = await ctx.orm.conversation.findAll({
      where: {
        [Op.or]: [
          { userId1: userId },
          { userId2: userId },
        ],
      },
      include: ['user1', 'user2'],
    });
  }
  await ctx.render('conversations/index', {
    currentId: userId,
    conversations,
    newConversationPath: ctx.router.url('conversations-new'),
    conversationPath: (id) => ctx.router.url('conversation', id),
    deleteConversationPath: (id) => ctx.router.url('conversations-delete', id),
  });
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

router.del('conversations-delete', '/:id', async (ctx) => {
  const { conversation } = ctx.state;
  await conversation.destroy();
  ctx.redirect(ctx.router.url('conversations'));
});

module.exports = router;