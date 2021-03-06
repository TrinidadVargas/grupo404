const bcrypt = require('bcrypt');
const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('session-new', '/new', (ctx) => ctx.render(
  'session/new',
  {
    submitPath: ctx.router.url('session-create'),
  },
));

router.post('session-create', '/', async (ctx) => {
  const { email, password } = ctx.request.body;
  try {
    const user = await ctx.orm.user.findOne({ where: { email } });
    const authenticated = await bcrypt.compare(password, user.password);
    console.log('hola');
    if (user && authenticated) {
      ctx.session.currentUserId = user.id;
      ctx.redirect('/');
    } else {
      await ctx.render('session/new', {
        error: 'Usuario y/o contraseña incorrectos',
        email,
        submitPath: ctx.router.url('session-create'),
      });
    }
  } catch (errors) {
    await ctx.render('session/new', {
      error: 'Usuario y/o contraseña incorrectos',
      submitPath: ctx.router.url('session-create'),
    });
  }
  
});

router.delete('session-destroy', '/', async (ctx) => {
  ctx.session.currentUserId = null;
  ctx.redirect('/');
});

module.exports = router;