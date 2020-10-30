const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const machines = require('./routes/machines');

const room = require('./routes/room');
const event_users = require('./routes/event_users');
const events = require('./routes/events');

const users = require('./routes/users');
// const gyms = require('./routes/gyms');
const conversations = require('./routes/conversations');
const messages = require('./routes/messages');
const memberships = require('./routes/memberships');
const session = require('./routes/session');
const appointments = require('./routes/appointments');
const event_inscriptions = require('./routes/event_inscriptions');


const router = new KoaRouter();

router.use(async (ctx, next) => {
  Object.assign(ctx.state, {
    newSessionPath: ctx.router.url('session-new'),
    destroySessionPath: ctx.router.url('session-destroy'),
  });
  return next();
});

router.use(async (ctx, next) => {
  if (ctx.session.currentUserId) {
    ctx.state.currentUser = await ctx.orm.user.findByPk(ctx.session.currentUserId);
  }
  return next();
});

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/machines', machines.routes());

router.use('/room', room.routes());
router.use('/event_users', event_users.routes());
router.use('/events', events.routes());

router.use('/users', users.routes());
// router.use('/gyms', gyms.routes());
router.use('/conversations', conversations.routes());
router.use('/messages', messages.routes());
router.use('/memberships', memberships.routes());
router.use('/session', session.routes());
router.use('/appointments', appointments.routes());
router.use('/event_inscription', event_inscriptions.routes());


module.exports = router;
