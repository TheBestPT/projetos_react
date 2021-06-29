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

let username = []
let counter = 0
let messages = []
io.on("connection", (socket) => {
    console.log("New client connected")
    socket.emit('connection', counter++)

    socket.on('username', (username) => {
      username.push(username)
    })

    socket.on('chat-message', (content) => {
      messages.push(`Message sent by ${username[content.id]}: ${content.msg}`)
      console.log(`Message sent by ${!username[content.id] ? 'Sem nome' : username[content.id]}: ${content.msg}`)
    })

    socket.on('disconnect', () => {
      console.log('user disconnected')
    })

    socket.on('set-username', (content) => {
      username[content.id] = content.username
    })

    socket.on('messages', (content) => {
      socket.emit(messages)
      socket.emit('uuuuuuuuuuuuuuuuuuuu')
    })

})

io.on('global-messages', (content) => {
  socket.emit(messages)
})


app.get('/test/:msg', (req, res) =>{
    res.end(JSON.stringify({msg : `Mensagem enviada ${req.params.msg}`}))
})