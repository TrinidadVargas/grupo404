const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'specialistId',
  'userId',
  'date',
  'description',
  'place'
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
    editApptPath: id => ctx.router.url('appointment-edit', id),
    deleteApptPath: id => ctx.router.url('appointments-delete', id),
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

// router.get('appointments-edit', '/:id/edit', async (ctx) => {
//   const { appointment } = ctx.state;
//   await ctx.render('appointments/edit', {
//     appointment,
//     submitApptPath: ctx.router.url('appointments-update', { id: appointment.id }),
//   });
// });

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

// router.patch('appointments-update', '/:id', async (ctx) => {
//   const { appointment } = ctx.state;
//   try {
//     await appointment.update(ctx.request.body );
//     ctx.redirect(ctx.router.url('appointments'));
//   } catch (validationError) {
//     await ctx.render('appointments/edit', {
//       appointment,
//       errors: validationError.errors,
//       submitApptPath: ctx.router.url('appointments-update', { id: appointment.id }),
//     });
//   }
// });

router.del('appointments-delete', '/:id', async (ctx) => {
  const { appointment } = ctx.state;
  await appointment.destroy();
  ctx.redirect(ctx.router.url('appointments'));
});

module.exports = router;