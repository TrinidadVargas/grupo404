const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITED_FIELDS = [
  'type',
  'capacity',
];

const PROTECTED_PATHS = [
  '/new',
  '/:id/edit',
];

function checkAuth(ctx, next) {
  const { currentUser } = ctx.state;
  if (!currentUser) ctx.throw(401);

  return next();
}

router.use(PROTECTED_PATHS, checkAuth);

router.param('id', async (id, ctx, next) => {
  const sala = await ctx.orm.room.findByPk(id);
  if (!sala) ctx.throw(404);
  ctx.state.sala = sala;
  return next();
});

router.get('room', '/', async (ctx) => {
  const room = await ctx.orm.room.findAll();
  await ctx.render('room/index', {
    room,
    roomPath: (id) => ctx.router.url('sala', id),
    editRoomPath: (id) => ctx.router.url('room-edit', id),
    newRoomPath: ctx.router.url('room-new'),
    deleteRoomPath: (id) => ctx.router.url('room-delete', id),
  });
});

router.get ('room-new', '/new', (ctx) => {
  const sala = ctx.orm.room.build();
  return ctx.render('room/new', {
    sala,
    submitPath: ctx.router.url('room-create'),
  });
});

router.post('room-create', '/', async (ctx) => {
  const sala = ctx.orm.room.build(ctx.request.body);
  try {
  	console.log(sala);
  	await sala.save({ fields: PERMITED_FIELDS });
    ctx.redirect(ctx.router.url('room'));
  } catch (error) {
    await ctx.render('room/new', {
      sala,
      errors: error.errors,
      submitPath: ctx.router.url('room-create'),
  	});
  }
});

router.get('sala', '/:id', async (ctx) => {
  const { sala } = ctx.state;
  return ctx.render('room/show', {
    sala,
    events: await sala.getEvents(),
  });
});

router.get('room-edit', '/:id/edit', (ctx) => {
  const { room } = ctx.state;
  return ctx.render('room/edit', {
    room,
    submitPath: ctx.router.url('room-update', room.id),
  });
});

router.patch('room-update', '/:id', checkAuth, async (ctx) => {
  const { cloudinary, room } = ctx.state;
  try {
    const { logo } = ctx.request.files;
    if (logo.size > 0) {
      // This does now allow to update existing images. It should be handled
      const uploadedImage = await cloudinary.uploader.upload(logo.path);
      ctx.request.body.image = uploadedImage.public_id;
    }
    await room.update(ctx.request.body, { fields: PERMITTED_FIELDS });
    ctx.redirect(ctx.router.url('room'));
  } catch (error) {
    await ctx.render('room/edit', {
      room,
      errors: error.errors,
      submitPath: ctx.router.url('room-update', room.id),
    });
  }
});

router.del('rooms-delete', '/:id', async (ctx) => {
  const { sala } = ctx.state;
  await sala.destroy();
  ctx.redirect(ctx.router.url('rooms'));
});

module.exports = router;
