const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'specialistId',
  'userId',
  'date',
  'description',
  'place',
  'appttype',
];

router.param('id', async (id, ctx, next) =>{
  const appointment = await ctx.orm.appointment.findByPk(id);
  if (!appointment) ctx.throw (404);
  ctx.state.appointment = appointment;
  return next();
});

router.get('appointments', '/', async (ctx) => {
  const appointments = await ctx.orm.appointment.findAll({
    include: ['specialist'],
  });
  await ctx.render('appointments/index', {
    appointments,
    specialistPath: id => ctx.router.url('user', id),
    apptPath: id => ctx.router.url('appointment', id),
    // editApptPath: id => ctx.router.url('appointments-edit', id),
    deleteApptPath: id => ctx.router.url('appointments-delete', id),
    // inscribeUserPath: id => ctx.router.url('appointments-update', id),
    // inscribeUserPath: ctx.router.url('appointments-update', { id: user.id }),
    newApptPath: ctx.router.url('appointments-new'),
  });
});

router.get('appointments-new', '/new', async (ctx) => {
  const appointment = ctx.orm.appointment.build();
  return await ctx.render('appointments/new', {
    appointment,
    submitAppointmentPath: ctx.router.url('appointments-create'),
  });
});

router.get('appointments-edit', '/:id/edit', async (ctx) => {
  const { appointment } = ctx.state;
  await ctx.render('appointments/edit', {
    appointment,
    submitApptPath: ctx.router.url('appointments-update', { id: appointment.id }),
  });
});

router.post('appointments-create', '/', async (ctx) => {
  const appointment = ctx.orm.appointment.build(ctx.request.body);
  try {
    await appointment.save({fields: PERMITTED_FIELDS});
    ctx.redirect(ctx.router.url('appointments')); 
  } catch (error) {
    await ctx.render('appointments/new', {
      appointment,
      errors: error.errors,
    });
  }
});

router.get('appointment', '/:id', async (ctx) => {
  const {appointment} = ctx.state;
  const specialist = await ctx.orm.user.findByPk(appointment.specialistId);
  return ctx.render('appointments/show', { 
    appointment: appointment,
    specialist,
    specialistPath: id => ctx.router.url('user', id),
    editApptPath: ctx.router.url('appointments-edit', { id: appointment.id }),
    submitApptPath: ctx.router.url('appointments-update', { id: appointment.id }),
    // editApptPath: id => ctx.router.url('appointments-edit', id),
  });
});

router.del('appointments-delete', '/:id', async (ctx) => {
  const { appointment } = ctx.state;
  await appointment.destroy();
  ctx.redirect(ctx.router.url('appointments'));
});

router.post('appointments-update', '/:id', async (ctx) => {
  const { appointment } = ctx.state;
  const specialist = await ctx.orm.user.findByPk(appointment.specialistId);
  const params = ctx.request.body;
  if (params['userId'] == 0)
  {
    params['userId'] = null;
  }
  try {
    await appointment.update(params, { fields: PERMITTED_FIELDS });
    ctx.redirect(ctx.router.url('appointments'));
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

module.exports = router;
