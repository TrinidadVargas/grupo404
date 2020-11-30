const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITED_FIELDS = [
  'type',
  'capacity',
];

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

router.patch('room', '/:id', async (ctx) => {
  const { jwtDecoded: { sub } } = ctx.state;
  const currentUser = await ctx.orm.user.findByPk(sub);
  const room = ctx.state.sala;

  if (currentUser.user_type != 0) {
    ctx.status = 401;
  } else {
    try {
      const params = ctx.request.body;
      await room.update(params, { fields: PERMITED_FIELDS });
      ctx.status = 201;
      ctx.body = { 
        room,
      };
    } catch (error) {
      ctx.status = 404;
      ctx.body = { 
        "errorMessage": error,
      };
    }
  }
  
});


module.exports = router;
