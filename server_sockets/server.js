var app = require('express')()
var http = require('http').createServer(app)
//var io = require('socket.io')(http)
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
})
const config = require('./config.json')
const cors = require('cors')
const PORT = config.port
app.use(cors())


http.listen(PORT, () =>{
    console.log(`Listening in port ${PORT}`)
})

io.on("connection", (socket) => {
    console.log("New client connected")
    socket.emit('connection', null)
    socket.on("msg", msg => {
      console.og('u')
      console.log(msg)
    })
})


app.get('/test/:msg', (req, res) =>{
    res.end(JSON.stringify({msg : `Mensagem enviada ${req.params.msg}`}))
})