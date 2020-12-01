const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITED_FIELDS = [
  'name',
  'logo',
  'description',
  'days',
  'startsAt',
  'endsAt',
  'roomId',
  'image',
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
  const event = await ctx.orm.event.findByPk(id);
  if (!event) ctx.throw(404);
  ctx.state.event = event;
  return next();
});

router.get('events', '/', async (ctx) => {
  const events = await ctx.orm.event.findAll();
  await ctx.render('events/index', {
    events,
    eventPath: (id) => ctx.router.url('event', id),
    newEventPath: ctx.router.url('events-new'),
    editEventPath: (id) => ctx.router.url('events-edit', id),
    deleteEventPath: (id) => ctx.router.url('events-delete', id),
  });
});

router.get('events-new', '/new', async (ctx) => {
  const event = ctx.orm.event.build();
  const room = await ctx.orm.room.findAll();
  return ctx.render('events/new', {
    event,
    room,
    submitPath: ctx.router.url('events-create'),
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
      submitPath: ctx.router.url('events-create'),
    });
  }
});

router.get('event', '/:id', async (ctx) => {
  const { event } = ctx.state;
  const users = await event.getUsers();
  let enrolled = false;
  let inscriptionId = 0;
  console.log(users);
  for (i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.id == ctx.session.currentUserId) {
      enrolled = true;
      const inscription = await ctx.orm.event_inscription.findAll({
        where: {
          userId: user.id,
          eventId: event.id,
        },
      });
      inscriptionId = inscription[0].id;
    }
  }
  return ctx.render('events/show', {
    event,
    users,
    enrolled,
    submitInscriptionPath: ctx.router.url('event_inscriptions-create'),
    deleteInscription: ctx.router.url('event_inscriptions-delete', inscriptionId),
  });
});

router.del('events-delete', '/:id', async (ctx) => {
  const { event } = ctx.state;
  ctx.state.event = await ctx.orm.event.findByPk(ctx.params.id);
  await event.destroy();
  ctx.redirect(ctx.router.url('events'));
});

router.get('events-edit', '/:id/edit', (ctx) => {
  const { event } = ctx.state;
  return ctx.render('events/edit', {
    event,
    submitPath: ctx.router.url('events-update', event.id),
  });
});

router.patch('events-update', '/:id', checkAuth, async (ctx) => {
  const { cloudinary, event } = ctx.state;
  try {
    const { logo } = ctx.request.files;
    if (logo.size > 0) {
      // This does now allow to update existing images. It should be handled
      const uploadedImage = await cloudinary.uploader.upload(logo.path);
      ctx.request.body.image = uploadedImage.public_id;
    }
    await event.update(ctx.request.body, { fields: PERMITED_FIELDS });
    ctx.redirect(ctx.router.url('events'));
  } catch (error) {
    await ctx.render('events/edit', {
      event,
      errors: error.errors,
      submitPath: ctx.router.url('events-update', event.id),
    });
  }
});

module.exports = router;
