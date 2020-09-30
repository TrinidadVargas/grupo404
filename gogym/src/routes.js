const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const machines = require('./routes/machines');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/machines',machines.routes());

module.exports = router;
