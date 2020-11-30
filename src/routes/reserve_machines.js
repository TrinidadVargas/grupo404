const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'userId',
  'machineId',
  'date',
  'duration',
  'status',
];

router.param('id', async (id, ctx, next) => {
  const machineReservation = await ctx.orm.user_machine.findByPk(id);
  if (!machineReservation) ctx.throw(404);
  ctx.state.machineReservation = machineReservation;
  return next();
});

router.get('reserve_machines', '/', async (ctx) => {
  let machineReservations = [];
  if (ctx.state.currentUser && ctx.state.currentUser.user_type != 0) {
    machineReservations = await ctx.state.currentUser.getReservation({
      include: ['machine'],
    });
  } else if (ctx.state.currentUser) {
    machineReservations = await ctx.orm.user_machine.findAll({
      include: ['machine', 'user'],
    });
  }

  await ctx.render('reserve_machines/index', {
    machineReservations,
    deleteMachineReservationPath: (id) => ctx.router.url('reserve_machines-delete', id),
    updateMachineReservationPath: (id) => ctx.router.url('reserve_machines-update', id),
    machinePath: (id) => ctx.router.url('machine', id),
    // userPath,
  });
});

router.get('reserve_machines-new', '/new', async (ctx) => {
  const machineReservation = await ctx.orm.user_machine.build();
  machineReservation.machineId = 1;
  return await ctx.render('reserve_machines/new', {
    machineReservation,
    createMachineReservationPath: ctx.router.url('reserve_machines-create'),
  });
});

router.post('reserve_machines-create', '/', async (ctx) => {
  const machineReservation = await ctx.orm.user_machine.build(ctx.request.body);
  try {
    console.log(machineReservation);
    await machineReservation.save({fields: PERMITTED_FIELDS});
    ctx.redirect(ctx.router.url('machine', machineReservation.machineId)); 
  } catch (error) {
    await ctx.render('reserve_machines/new', {
      machineReservation,
      createMachineReservationPath: ctx.router.url('reserve_machines-create'),
      errors: error.errors,
    });
  }
});

router.post('reserve_machines-update', '/:id', async (ctx) => {
  const { machineReservation } = ctx.state;
  const params = ctx.request.body;
  if (params['userId'] == 0)
  {
    params['userId'] = null;
  }
  console.log(machineReservation);
  try {
    await machineReservation.update(params, { fields: ['status', 'userId'] });
    ctx.redirect(ctx.router.url('machine', machineReservation.machineId));
  } catch (error) {
    await ctx.render('appointments/show', {
      appointment,
      errors: error.errors,
      specialist,
      submitApptPath: ctx.router.url('appointments-update', { id: appointment.id }),
      specialistPath: id => ctx.router.url('user', id),
    });
  }
});

router.del('reserve_machines-delete', '/:id', async (ctx) => {
  const { machineReservation } = ctx.state;
  const machineId = machineReservation.machineId;
  await machineReservation.destroy();
  ctx.redirect(ctx.router.url('machine', machineId));
});

module.exports = router;