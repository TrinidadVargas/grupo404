const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'conversationId',
  'senderId',
  'message',
];

router.get('messages-new', '/new', (ctx) => {
  return ctx.render('messages/new', {
    createMessagePath: ctx.router.url('messages-create'),
  });
});

router.post('messages-create', '/', async (ctx) => {
  const message = ctx.orm.message.build(ctx.request.body);
  console.log(ctx.request.body);
  try {
    console.log(ctx.request.body)
    await message.save({fields: PERMITTED_FIELDS});
    ctx.redirect(ctx.router.url('users')); 
  } catch (error) {
    ctx.redirect('back');
    console.log('ouch shit')
  }
});

module.exports = router;