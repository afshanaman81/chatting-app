const express = require('express');
const socket = require('socket.io');
const path = require('path');
const chatController = require('./socketController');

let users = 0;
const PORT = 3000;
const app = express();
const server = app.listen(PORT, () => {
  console.log(`API Gateway/Websocket Server Listening on ${PORT}`);
});
const io = socket().listen(server);

// Middleware
app.use(express.static(path.join(__dirname)));

// Routes
app.use('/', (req, res) => res.sendFile('/index.html'));

// Sockets
io.on('connection', client => {
  console.log(`users connected: ${users++}\n`);

  client.on('register', chatController.handleRegister);
  client.on('join',     chatController.handleJoin);
  client.on('leave',    chatController.handleLeave);
  client.on('message',  chatController.handleMessage);
  client.on('group',    chatController.handleGroupMessage);
  client.on('broadcast',chatController.handleBroadcast);
  client.on('disconnect', () => {
    console.log('user disconnected');
    users--;
  });
});

module.exports = app;
