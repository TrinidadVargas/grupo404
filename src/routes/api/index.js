const KoaRouter = require('koa-router');
const jwt = require('koa-jwt');
const auth = require('./auth');
const events = require('./events');
const users = require('./users');
const machines = require('./machines');
const rooms = require('./rooms');
const register = require('./register');
const healthprofiles = require('./healthprofiles');

const router = new KoaRouter({ prefix: '/api' });

router.use((ctx, next) => {
  ctx.apiUrl = (...params) => `${ctx.origin}${ctx.router.url(...params)}`;
  return next();
});

router.get('/', async (ctx) => {
  ctx.body = { message: 'gogym API' };
});

router.use('/auth', auth.routes());
router.use('/events', events.routes());
router.use('/register', register.routes());

router.use(jwt({ secret: process.env.JWT_SECRET, key: 'jwtDecoded' }));

router.use('/users', users.routes());
router.use('/machines', machines.routes());
router.use('/rooms', rooms.routes());
router.use('/healthprofiles', healthprofiles.routes());

module.exports = router;
