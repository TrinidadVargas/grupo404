const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'user_id',
  'birth',
  'level',
  'gender',
  'height',
  'weight',
  'fat_percentage',
  'emergency_number',
];

router.param('id', async (id, ctx, next) => {
  const health_profile = await ctx.orm.health_profile.findByPk(id);
  if (!health_profile) ctx.throw (404);
  ctx.state.health_profile = health_profile;
  return next();
});

router.get('healthprofiles', '/', async (ctx) => {
  const health_profiles = await ctx.orm.health_profile.findAll();
  await ctx.render('healthprofiles/index', {
    health_profiles,
    profilePath: id => ctx.router.url('healthprofile', id),
    newProfilePath: ctx.router.url('healthprofiles-new'),
  });
});

router.get('healthprofiles-new', '/new', (ctx) => {
  const health_profile = ctx.orm.health_profile.build();
  return ctx.render('healthprofiles/new', {
    health_profile,
    createProfilePath: ctx.router.url('healthprofiles-create'),
  });
});

router.post('healthprofiles-create', '/', async (ctx) => {
  const health_profile = ctx.orm.health_profile.build(ctx.request.body);
  try {
    await health_profile.save({fields: PERMITTED_FIELDS });
    ctx.redirect(ctx.router.url('healthprofiles'));
  } catch (error) {
    await ctx.render('healthprofiles/new', {
      health_profile,
      errors: error.errors,
      createProfilePath: ctx.router.url('healthprofiles-create'),
    });
  }

});

router.get('healthprofiles', '/:id', (ctx) =>{
    const {health_profile} = ctx.state;
    return ctx.render('healthprofiles/show', {health_profile});
  });
  
module.exports = router;