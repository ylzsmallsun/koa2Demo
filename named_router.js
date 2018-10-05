const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

router.get('/', async(ctx, next) => {
  ctx.response.body = `<h1>index page</h1>`;
});

// router.get('/home', async (ctx, next) => {
//   console.log(ctx.request.query);
//   console.log(ctx.request.querystring);
//   ctx.response.body = '<h1>HOME page</h1>'
// });
router.get('/home/:id/:name', async (ctx, next) => {
  console.log(ctx.params);
  ctx.response.body = `<h1>HOME page ${ctx.params.id} / ${ctx.params.name}</h1>`;
});

router.get('/404', async (ctx, next) => {
  ctx.response.body = '<h1>404 Not Found</h1>'
});
// named router, multiple middleware
router.get('user', '/users/:id', 
  async (ctx, next) => {
    ctx.response.body = '<h1>User page</h1>';
    ctx.user = {
      id: 007,
      name: 'Tom'
    };
    await next();
  },
  async (ctx) => {
    console.log(ctx.user);
  }
);
const userUrl1 = router.url('user', 3);
console.log(userUrl1);

app.use(router.routes());

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
