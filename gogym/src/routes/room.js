const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITED_FIELDS =[
    'type',
    'capacity'
];

router.param('id', async (id, ctx, next) => {
    const sala = await ctx.orm.room.findByPk(id);
    if (!sala) ctx.throw(404);
    ctx.state.sala = sala;
    return next();
});

router.get('room', '/', async(ctx) => {
    const room = await ctx.orm.room.findAll();
    await ctx.render('room/index', {
        room,
        newRoomPath: ctx.router.url('room-new'),
    });
});

router.get ('room-new', '/new', (ctx) => {
    const sala = ctx.orm.room.build();
    return ctx.render('room/new', {
        sala,
        createRoomPath: ctx.router.url('room-create'),
    });
});

router.post('room-create', '/', async (ctx) => {
    const sala = ctx.orm.room.build(ctx.request.body);
    try {
        console.log(sala);
    await sala.save({ fields: PERMITED_FIELDS });
    ctx.redirect(ctx.router.url('room'));
    } catch (error) {
        await ctx.render('room/new', {
            sala,
            errors: error.errors,
            createRoomPath: ctx.router.url('room-create'),
        });
    }
});

router.get('sala', '/:id', (ctx) => {
    const {sala} = ctx.state;
    return ctx.render('room/show', { sala });
});


module.exports = router;