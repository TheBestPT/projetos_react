const express = require('express')
const app = express()
const socketIo = require('socket.io')
const http = require('http')
const config = require('./config.json')
const cors = require('cors')

app.use(cors())

const server = http.createServer(app);
const io = socketIo(server);


app.listen(config.port, () =>{
    console.log(`Listening in port ${config.port}`)
})

io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      clearInterval(interval);
    });
});
  
const getApiAndEmit = socket => {
const response = new Date();
// Emitting a new message. Will be consumed by the client
socket.emit("FromAPI", response);
};


app.get('/test/:msg', (req, res) =>{
    res.end(JSON.stringify({msg : `Mensagem enviada ${req.params.msg}`}))
})