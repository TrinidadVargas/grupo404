const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'user_id',
  'type',
  'start',
  'end',
];


router.param('id', async (id, ctx, next) =>{
  const membership = await ctx.orm.membership.findByPk(id);
  if (!membership) ctx.throw (404);
  ctx.state.membership = membership;
  return next();
});


router.get('memberships', '/', async (ctx) => {
  const memberships = await ctx.orm.membership.findAll();
  await ctx.render('memberships/index', {
    memberships,
    membershipPath: id => ctx.router.url('membership', id),
    newMembershipPath: ctx.router.url('membership-new'),
  });
}); 

router.get('membership-new', '/new', (ctx) => {
  const membership = ctx.orm.membership.build();
  return ctx.render('memberships/new', {
  membership,
  createMembershipPath: ctx.router.url('membership-create'),
  });
});

router.post('membership-create', '/', async (ctx) => {
  const membership = ctx.orm.membership.build(ctx.request.body);
  try {
    await membership.save({fields: PERMITTED_FIELDS});
    ctx.redirect(ctx.router.url('memberships'));
  } catch (error) {
    await ctx.render('memberships/new', {
      membership,
      errors: error.errors,
      createMembershipPath: ctx.router.url('membership-create'),
    });
  }

});

router.get('membership', '/:id', (ctx) =>{
  const {membership} = ctx.state;
  return ctx.render('memberships/show', {membership});
});

module.exports = router;