import React from 'react'
import config from '../config.json'
import socketIOClient from 'socket.io-client'
export default class MsgTest extends React.Component{

    
    render(){
      let socket = socketIOClient(config.server)
      socket.on('connection', () => {
            console.log(`I'm connected with the back-end`)
      })
        return (
            <button onClick={this.enviar.bind(this)}>Enviar mensagem</button>
        )
    }

    enviar(){
      console.log('u')
      let socket = socketIOClient(config.server)
      socket.on("msg", () => {
        socket.emit('olaaaa')
      })
    }
}