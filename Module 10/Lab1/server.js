const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    io.emit('connection', 'a user connected');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});