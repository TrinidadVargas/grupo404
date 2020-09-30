const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const room = require('./routes/room');
const events = require('./routes/events');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/room', room.routes()); 
router.use('/events', events.routes()); 

module.exports = router;
