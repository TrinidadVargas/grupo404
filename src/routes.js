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
const health_profiles = require('./routes/healthprofiles');
const reserve_machines = require('./routes/reserve_machines');


const router = new KoaRouter();

router.use(async (ctx, next) => {
  Object.assign(ctx.state, {
    newSessionPath: ctx.router.url('session-new'),
    destroySessionPath: ctx.router.url('session-destroy'),
    eventsPath: ctx.router.url('events'),
    roomsPath: ctx.router.url('room'),
    machinesPath: ctx.router.url('machines'),
    newUserPath: ctx.router.url('users-new'),
    usersPath: ctx.router.url('users'),
    userPath: id => ctx.router.url('user', id),
    chatsPath: ctx.router.url('conversations'),
    machineReservationsPath: ctx.router.url('reserve_machines'),
    usersTrainersPath: ctx.router.url('users-entrenadores'),
    usersNutriPath: ctx.router.url('users-nutricionistas'),
    chartsPath: ctx.router.url('users-charts'),
    personalusersPath: ctx.router.url('users-personal'),
    adminuserPath: id => ctx.router.url('users-admin', id),
    appointmentsPath: ctx.router.url('appointments'),
    healthprofilePath: ctx.router.url('healthprofiles'),
    membershipsPath: ctx.router.url('memberships'),
    
    
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
router.use('/healthprofiles', health_profiles.routes());
router.use('/reserve_machines', reserve_machines.routes());



module.exports = router;
