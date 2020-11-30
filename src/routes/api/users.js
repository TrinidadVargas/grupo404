const KoaRouter = require('koa-router');

const router = new KoaRouter();

const ADMIN_UPDATE_PERMITTED_FIELDS = [
  'name',
  'lastname',
  'password',
  'photo',
  'user_type',
];

router.param('id', async (id, ctx, next) => {
  const user = await ctx.orm.user.findByPk(id);
  if (!user) ctx.throw(404);
  ctx.state.user = user;
  return next();
});

router.get('user-data', '/me', async (ctx) => {
  const { jwtDecoded: { sub }} = ctx.state;
  const user = await ctx.orm.user.findByPk(sub);
  ctx.body = user;
});

router.get('user-data', '/all', async (ctx) => {
  const users = await ctx.orm.user.findAll();
  ctx.body = users;
});

router.patch('user', '/:id', async (ctx) => {
  const { jwtDecoded: { sub } } = ctx.state;
  const currentUser = await ctx.orm.user.findByPk(sub);
  const { user } = ctx.state;

  if (currentUser.dataValues.user_type != 0 && user.id != currentUser.id) {
    ctx.body = {
      "status": 401,
    };
  } else {
    try {
      if (currentUser.user_type != 0) {
        user.user_type = currentUser.user_type;
      }
      const params = ctx.request.body;
      console.log('lalala');
      console.log(user);
      await user.update(params, { fields: ADMIN_UPDATE_PERMITTED_FIELDS });
      ctx.body = { 
        "status": 201,
        user,
      };
    } catch (error) {
      ctx.status = 403;
      ctx.body = { 
        "errorMessage": error,
      };
    }
  }
  
});

module.exports = router;
