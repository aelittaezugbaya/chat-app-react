import Koa from "koa";
import Router from "koa-router";

import websockets from "./sockets";

const koa = new Koa();
const app = new Router();

websockets(koa);

app.get("/api/test", ctx => {
  ctx.status = 200;
  ctx.body = [
    {
      id: 1,
      text: "Switch to Koa",
      completed: true
    },
    {
      id: 2,
      text: "???",
      completed: true
    },
    {
      id: 3,
      text: "Profit",
      completed: true
    }
  ];
});

koa.use(app.routes());
koa.listen(3000);
