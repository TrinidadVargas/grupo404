const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
  const healthprofile = await ctx.orm.health_profile.findByPk(id);
  if (!healthprofile) ctx.throw(404);
  ctx.state.healthprofile = healthprofile;
  return next();
});

router.get('/', async (ctx) => {
  const healthprofiles = await ctx.orm.health_profile.findAll();
  ctx.body = healthprofiles.map((healthprofile) => ({
    ...healthprofile.toJSON(),
    healthprofileUrl: ctx.apiUrl('healthprofile', healthprofile.id),
  }));
});

router.get('healthprofile', '/:id', async (ctx) => {
  const { healthprofile } = ctx.state;
  ctx.body = {
    ...healthprofile.toJSON(),
  };
});

router.post('healthprofile-create', '/', async (ctx) => {
  const healthprofile = ctx.orm.health_profile.build(ctx.request.body);
  await healthprofile.save();
  ctx.body = { };
});

module.exports = router;
