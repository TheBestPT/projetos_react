import React from "react"
import socketIOClient from "socket.io-client"
const SERVER = "http://127.0.0.1:3001/"

function App() {
  let socket = socketIOClient(SERVER)
  socket.on('connection', () => {
        console.log(`I'm connected with the back-end`)
  })

  return (
    <p>
      u
    </p>
  );
}

export default App;
