const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
  const machine = await ctx.orm.machines.findByPk(id);
  if (!machine) ctx.throw(404);
  ctx.state.machine = machine;
  return next();
});

router.get('/', async (ctx) => {
  const machines = await ctx.orm.machines.findAll();
  ctx.body = machines.map((machine) => ({
    ...machine.toJSON(),
    machineUrl: ctx.apiUrl('machine', machine.id),
  }));
});

router.get('machine', '/:id', async (ctx) => {
  const { machine } = ctx.state;
  ctx.body = {
    ...machine.toJSON(),
  };
});

router.post('machine-create', '/', async (ctx) => {
  const machine = ctx.orm.machines.build(ctx.request.body);
  await machine.save();
  ctx.body = { };
});

module.exports = router;
