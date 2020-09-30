const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const users = require('./routes/users');
const gyms = require('./routes/gyms');
const conversations = require('./routes/conversations');
const messages = require('./routes/messages');


const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());

router.use('/users', users.routes());
router.use('/gyms', gyms.routes());
router.use('/conversations', conversations.routes());
router.use('/messages', messages.routes());

module.exports = router;

