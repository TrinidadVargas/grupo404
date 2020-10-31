const KoaRouter = require('koa-router');

const router = new KoaRouter();


const PERMITED_FIELDS = [
  'eventId',
  'userId',
];

// router.param('id', async (id, ctx, next) => {

//   const event_user = await ctx.orm.event_user.findByPk(id);
//   if (!event_user) ctx.throw(404);
//    ctx.state.event_user = event_user;
//    return next();
// });

router.get('event_users', '/', async (ctx) => {
  console.log('holi\n');
  // const event_users = await ctx.orm.event_user.findAll();
  // await ctx.render('users/index', {
  //   // event_users,
  // });
});

router.post('event_users-create', '/', async (ctx) => {
  console.log('\n\nTrini\n');
  // const user_event = ctx.orm.user_event.build(ctx.request.body);
  // try {
  //   await user_event.save({ fields: PERMITED_FIELDS });
  //   ctx.redirect('events');
  // } catch (error) {
  //   await ctx.render('events/index', {
  //   });
  // }
});

module.exports = router;