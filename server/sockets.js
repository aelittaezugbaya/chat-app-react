const http = require("http");
const socketIo = require("socket.io");

function websockets(app, db) {
  const server = http.createServer(app);
  const io = socketIo.listen(server);
  const connections = [];

  const port = 8000;

  server.listen(port);

  io.sockets.on("connection", socket => {
    connections.push(socket);
    console.log("Connected: %s sockets connected", connections.length);

    socket.on("disconnect", data => {
      connections.splice(connections.indexOf(socket), 1);
      console.log("Disconnected: %s sockets connected", connections.length);
    });

    socket.on("get current channels", data => {
      db.query("SELECT name FROM disscusions WHERE type='channel'").then(
        data => {
          io.sockets.emit("get current channels", data);
        }
      );
    });

    socket.on("get current users", data => {
      db.query("SELECT name FROM disscusions WHERE type='user'").then(data => {
        io.sockets.emit("get current users", data);
      });
    });
    socket.on("send message", data => {
      io.sockets.emit(`send message ${data.dialog}`, {
        name: data.user,
        msg: data.msg
      });
    });
  });
}

module.exports = websockets;
