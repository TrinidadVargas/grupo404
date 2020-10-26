const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'gym_id',
  'name',
  'description',
  'available',
];


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
    machinePath: id => ctx.router.url('machine', id),
    newMachinePath: ctx.router.url('machines-new'),
  });
}); 

router.get('machines-new', '/new', (ctx) => {
  const machine = ctx.orm.machines.build();
  return ctx.render('machines/new', {
  machine,
  createMachinePath: ctx.router.url('machines-create'),
  });
});

router.post('machines-create', '/', async (ctx) => {
  const machine = ctx.orm.machines.build(ctx.request.body);
  try {
    await machine.save({fields: PERMITTED_FIELDS});
    ctx.redirect(ctx.router.url('machines'));
  } catch (error) {
    await ctx.render('machines/new', {
      machine,
      errors: error.errors,
      createMachinePath: ctx.router.url('machines-create'),
    });
  }

});

router.get('machine', '/:id', (ctx) =>{
  const {machine} = ctx.state;
  return ctx.render('machines/show', {machine});
});

module.exports = router;