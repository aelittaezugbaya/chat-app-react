const http = require("http");
const socketIo = require("socket.io");

function websockets(app) {
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
  });
}

module.exports = websockets;
