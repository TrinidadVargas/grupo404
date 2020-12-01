const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'birth',
  'level',
  'gender',
  'height',
  'weight',
  'fat_percentage',
  'emergency_number',
];

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
  ctx.state = 200;
  ctx.body = {
    ...healthprofile.toJSON(),
  };
});

router.post('healthprofile-create', '/', async (ctx) => {
  const healthprofile = ctx.orm.health_profile.build(ctx.request.body);
  await healthprofile.save();
  ctx.state = 201;
  ctx.body = {"content": "ficha creada" };
});

router.del('healthprofile-delete', '/:id', async (ctx) => {
  const { healthprofile } = ctx.state;
  await healthprofile.destroy();
  ctx.body = {"content": "ficha eliminada" };
});

router.patch('healthprofile', '/:id', async (ctx) => {
  const { jwtDecoded: { sub } } = ctx.state;
  const currentUser = await ctx.orm.user.findByPk(sub);
  const { healthprofile } = ctx.state;
  console.log(healthprofile);

  if (currentUser.user_type == 1 && healthprofile.user_id != currentUser.id) {
    ctx.status = 401;
  } else {
    try {
      const params = ctx.request.body;
      await healthprofile.update(params, { fields: PERMITTED_FIELDS });
      ctx.status = 201;
      ctx.body = { 
        healthprofile,
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
