const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_FIELDS = [
  'name',
  'lastname',
  'email',
  'password',
  'photo',
  'rut',
  'user_type',
];

router.post('api-user-create', '/', async (ctx) => {
  const { email } = ctx.request.body;
  if (email) {
    const validMail = await ctx.orm.user.findOne({ where: { email } });
    ctx.request.body.user_type = 1;
    if (!validMail) {
      try {
        const user = ctx.orm.user.build(ctx.request.body);
        await user.save({ fields: PERMITTED_FIELDS });
        ctx.body = {state: 201};
      } catch (error) {
        ctx.body = {
          error: error.errors[0].path,
          errorMessage: error.errors[0].message};
      }
    } else {
      ctx.body = {state: 203, errorMessage: 'Mail already in use'};
    }
  } else {
    ctx.body = {state: 203, errorMessage: 'Enter a valid email'};

  }
});

module.exports = router;