const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITED_FIELDS = [
  'name',
  'description',
  'days',
  'startsAt',
  'endsAt',
  'roomId',
];

router.param('id', async (id, ctx, next) => {

   const event = await ctx.orm.event.findByPk(id);
   if (!event) ctx.throw(404);
    ctx.state.event = event;
    return next();
});

router.get('events', '/', async (ctx) => {
    const events = await ctx.orm.event.findAll();
    await ctx.render('events/index', {
      events,
      newEventPath: ctx.router.url('events-new'),
    });
  });

router.get('events-new', '/new', async (ctx) => {
  const event = ctx.orm.event.build();
  const room = await ctx.orm.room.findAll();
  return ctx.render('events/new', {
    event,
    room,
    createEventPath: ctx.router.url('events-create'),
  });
});

router.post('events-create', '/', async (ctx) => {
  const event = ctx.orm.event.build(ctx.request.body);
  try {
    await event.save({ fields: PERMITED_FIELDS });
    ctx.redirect('events');
  } catch (error) {
    const room = await ctx.orm.room.findAll();
    await ctx.render('events/new', {
      event,
      errors: error.errors,
      room,
      createEventPath: ctx.router.url('events-create'),
    });
  }
});

router.get('event', '/:id', async (ctx) => {
    const {event} = ctx.state;
    const users = await event.getUsers();
    return ctx.render('events/show', { 
      event, 
      users,
      inscriptionPath: ctx.router.url('events-new'),
    });
});


router.del('events.delete', '/:id', async (ctx) => {
  const { event } = ctx.state;
  ctx.state.event = await ctx.orm.event.findByPk(ctx.params.id);
  await event.destroy();
  ctx.redirect(ctx.router.url('events.list'));
});

module.exports = router;
