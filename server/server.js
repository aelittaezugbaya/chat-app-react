import Koa from "koa";
import Router from "koa-router";

import bodyParser from "koa-body-parser";
import websockets from "./sockets";

const koa = new Koa();
const app = new Router();

koa.use(bodyParser());

koa.use(async (ctx, next) => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}
  ctx.body = ctx.request.body && JSON.parse(ctx.request.body);
  await next();
});

websockets(koa);

//MOVE TO SEPARETE FILE
import pgp from "pg-promise";

const postgresInitOptions = {
  connect: client => {
    const cp = client.connectionParameters;
    console.log("Connected to database", cp.database);
  },
  disconnect: client => {
    const cp = client.connectionParameters;
    console.log("Disconnecting from database", cp.database);
  },
  error: err => {
    console.error("Database error", err);
  }
};

const postgresConnectionOptions = {
  host: "localhost",
  port: 5432,
  database: "chatdb"
  //user: 'if-needed',
  //password: 'if-needed'
};

const db = pgp(postgresInitOptions)(postgresConnectionOptions);

app.get("/api/test", ctx => {
  ctx.status = 200;
  console.log("looolk");
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

app.post("/api/saveMessage", async ctx => {
  console.log(ctx.body.table);
  await db
    .query(
      `INSERT INTO "${ctx.body.table}" ("user",message) VALUES ('${
        ctx.body.user
      }', '${ctx.body.message}')`
    )
    .then(data => (ctx.status = 200))
    .catch(error => (ctx.status = 500));
});

app.get("/api/getMessages/:table", async ctx => {
  console.log("here");
  await db
    .query(`SELECT "user", message FROM "${ctx.params.table}"`)
    .then(data => {
      console.log(data);
      ctx.status = 200;
      ctx.body = data;
    })
    .catch(error => console.log(error));
});

koa.use(app.routes());
koa.listen(3000);
