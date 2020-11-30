const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
  const sala = await ctx.orm.room.findByPk(id);
  if (!sala) ctx.throw(404);
  ctx.state.sala = sala;
  return next();
});

router.get('/', async (ctx) => {
  const room = await ctx.orm.room.findAll();
  ctx.body = room.map((sala) => ({
    ...sala.toJSON(),
    roomUrl: ctx.apiUrl('room', sala.id),
  }));
});

router.get('room', '/:id', async (ctx) => {
  const { sala } = ctx.state;
  ctx.body = {
    ...sala.toJSON(),
  };
});

router.post('room-create', '/', async (ctx) => {
  const sala = ctx.orm.room.build(ctx.request.body);
  await sala.save();
  ctx.body = { };
});

module.exports = router;
