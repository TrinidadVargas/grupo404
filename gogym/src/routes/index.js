const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  const events = await ctx.orm.event.findAll({include : 'room' }); 
  await ctx.render('index', { 
    events ,
    roomPath: (id) => ctx.router.url('sala', id),
    usersPath: ctx.router.url('users'),
  });
});

module.exports = router;

