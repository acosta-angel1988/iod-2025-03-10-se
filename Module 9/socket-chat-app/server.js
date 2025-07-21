const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

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

server.listen(3000, () => {
    console.log('listening on *:3000');
});