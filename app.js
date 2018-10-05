const Koa = require('koa');
const app = new Koa(); 


app.use(async (ctx, next) => {
  let stime = new Date().getTime();
  if (ctx.request.path === '/') {
    console.log('---index page reponse---');
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello Koa2</h1>';
  } else {
    await next();
  }
  let etime = new Date().getTime();  
  console.log(`请求地址: ${ctx.path}，响应时间：${etime - stime}ms`)
});
// about middleware
// app.use(async (ctx, next) => {
//   console.log('中间件1 doSomething')
//   await next();
//   console.log('中间件1 end')
// });

// app.use(async (ctx, next) => {
//   console.log('中间件2 doSomething')
//   await next();
//   console.log('中间件2 end')
// });

// app.use(async (ctx, next) => {
//   console.log('中间件3 doSomething')
//   await next();
//   console.log('中间件3 end')
// });

// app.use(async (ctx, next) => {
//   if (ctx.request.path === '/') {
//       ctx.response.body = '<h1>index page</h1>';
//   } else {
//       await next();
//   }
// });
app.use(async (ctx, next) => {
  if (ctx.request.path === '/home') {
      console.log('---home page reponse---');
      ctx.response.body = '<h1>home page</h1>';
  } else {
      await next();
  }
});
app.use(async (ctx, next) => {
  if (ctx.request.path === '/404') {
      console.log('---404 page reponse---');
      ctx.response.body = '<h1>404 Not Found</h1>';
  } else {
      await next();
  }
});

app.listen(3000, () => {
  console.log('Hello koa2');
});
