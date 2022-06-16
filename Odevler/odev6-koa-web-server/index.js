const Koa = require("koa");
const app = new Koa();

app.use(ctx => {
    const url = ctx.url;
    if (url === "/") {
        ctx.body = "<h1>Anasayfa</h1>"
    } else if (url === "/hakkimda") {
        ctx.body = "<h1>Hakkımda</h1>"
    } else if (url === "/iletisim") {
        ctx.body = "<h1>İletişim</h1>"
    }
})

app.listen(3000);