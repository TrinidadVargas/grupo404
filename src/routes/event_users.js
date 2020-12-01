const KoaRouter = require('koa-router');

const router = new KoaRouter();


const PERMITED_FIELDS = [
  'eventId',
  'userId',
];


router.get('event_users', '/', async (ctx) => {
  
});

router.post('event_users-create', '/', async (ctx) => {
  console.log('\n\nTrini\n');
});

module.exports = router;