const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('user-data', '/me', async (ctx) => {
  const { jwtDecoded: { sub } } = ctx.state;
  const user = await ctx.orm.user.findByPk(sub);
  ctx.body = user;
});

router.get('user-data', '/all', async (ctx) => {
  const users = await ctx.orm.user.findAll();
  ctx.body = users;
});

module.exports = router;
