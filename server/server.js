import Koa from "koa";
import Router from "koa-router";

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

const koa = new Koa();
const app = new Router();

app.get("/api/postgres_connection_test", ctx => {
  return db
    .one("SELECT $1::text as message", [
      "Just checking if we can connect to the database!"
    ])
    .then(result => {
      console.log(result);
      ctx.status = 200;
      ctx.body = result;
    });
});

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
