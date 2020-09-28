const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
    const sala = await ctx.orm.sala.findByPk(id);
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

router.get('sala', '/:id', (ctx) => {
    const { sala } = ctx.state;
    return ctx.render('room/show', { sala });
});

router.get ('room-new', '/new', (ctx) => {
    return ctx.render('room/new')
});
module.exports = router;