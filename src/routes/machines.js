const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'gym_id',
  'name',
  'description',
  'available',
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

router.param('id', async (id, ctx, next) =>{
  const machine = await ctx.orm.machines.findByPk(id);
  if (!machine) ctx.throw (404);
  ctx.state.machine = machine;
  return next();
});

router.get('machines', '/', async (ctx) => {
  const machines = await ctx.orm.machines.findAll();
  await ctx.render('machines/index', {
    machines,
    machinePath: (id) => ctx.router.url('machine', id),
    newMachinePath: ctx.router.url('machines-new'),
    editMachinePath: (id) => ctx.router.url('machines-edit', id),
    deleteMachinePath: (id) => ctx.router.url('machines-delete', id),
  });
});

router.get('machines-all', '/all', async (ctx) => {
  const machines = await ctx.orm.machines.findAll();
  switch (ctx.accepts(['json'])) {
    case 'json':
      ctx.body = machines.map(({ id, name, description, image, tipo }) => (
        { id, 
          name, 
          description, 
          image: ctx.state.cloudinary.url(image),
          tipo, 
          url: ctx.router.url('machine', id),
      }));
      break;
    default:
      break;
  }
});


router.get('machines-new', '/new', (ctx) => {
  const machine = ctx.orm.machines.build();
  return ctx.render('machines/new', {
    machine,
    submitPath: ctx.router.url('machines-create'),
  });
});

router.post('machines-create', '/', async (ctx) => {
  const machine = ctx.orm.machines.build(ctx.request.body);
  try {
    await machine.save({ fields: PERMITTED_FIELDS });
    ctx.redirect(ctx.router.url('machines'));
  } catch (error) {
    await ctx.render('machines/new', {
      machine,
      errors: error.errors,
      submitPath: ctx.router.url('machines-create'),
    });
  }
});

router.get('machine', '/:id', async (ctx) => {
  const { machine } = ctx.state;
  const reservations = await machine.getMachineReservation();
  console.log(reservations);
  return ctx.render('machines/show', { 
    machine,
    createMachineReservationPath: ctx.router.url('reserve_machines-create'),
    reservations,
    updateMachineReservationPath: (id) => ctx.router.url('reserve_machines-update', id),
    deleteMachineReservationPath: (id) => ctx.router.url('reserve_machines-delete', id),
    editMachinePath: (id) => ctx.router.url('machines-edit', id),
    deleteMachinePath: (id) => ctx.router.url('machines-delete', id),
  });
});

router.get('machines-edit', '/:id/edit', (ctx) => {
  const { machine } = ctx.state;
  return ctx.render('machines/edit', {
    machine,
    submitPath: ctx.router.url('machines-update', machine.id),
  });
});

router.patch('machines-update', '/:id', checkAuth, async (ctx) => {
  const { cloudinary, machine } = ctx.state;
  try {
    const { logo } = ctx.request.files;
    if (logo.size > 0) {
      // This does now allow to update existing images. It should be handled
      const uploadedImage = await cloudinary.uploader.upload(logo.path);
      ctx.request.body.image = uploadedImage.public_id;
    }
    await machine.update(ctx.request.body, { fields: PERMITTED_FIELDS });
    ctx.redirect(ctx.router.url('machines'));
  } catch (error) {
    await ctx.render('machines/edit', {
      machine,
      errors: error.errors,
      submitPath: ctx.router.url('machines-update', machine.id),
    });
  }
});

router.del('machines-delete', '/:id', async (ctx) => {
  const { machine } = ctx.state;
  await machine.destroy();
  ctx.redirect(ctx.router.url('machines'));
});

module.exports = router;
