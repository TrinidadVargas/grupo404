const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'eventId',
  'userId',
];

router.param('id', async (id, ctx, next) =>{
  const event_inscription = await ctx.orm.event_inscription.findByPk(id);
  if (!event_inscription) ctx.throw (404);
  ctx.state.event_inscription = event_inscription;
  return next();
});

router.post('event_inscriptions-create', '/', async (ctx) => {
  const event_inscription = ctx.orm.event_inscription.build(ctx.request.body);
  const eventId = ctx.request.body['eventId'];
  try {
    await event_inscription.save({fields: PERMITTED_FIELDS});
    // ctx.redirect(ctx.router.url('events', { id: event.id })); 
    ctx.redirect(ctx.router.url('event', eventId));//, eventId);
  } catch (error) {
    await ctx.render('events', {
      // event_inscription,
      // errors: error.errors,
    });
  }
});

router.del('event_inscriptions-delete', '/:id', async (ctx) => {
  const { event_inscription } = ctx.state;
  await event_inscription.destroy();
  ctx.redirect(ctx.router.url('events'));
});


module.exports = router;

