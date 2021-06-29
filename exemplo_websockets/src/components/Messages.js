import React from 'react'
import config from '../config.json'
import socketIOClient from 'socket.io-client'


export default class Messages extends React.Component{
    constructor(){
        super()
        this.socket = socketIOClient(config.server)
    }

    render(){
        this.socket.on('connection', (id) => {
            console.log('Conectado por mensagens')
        })
        return (
            <button onClick={this.listMessages.bind(this)}>U</button>
        )
    }


    listMessages(){
        this.socket.on('messages', (messages) => {
            console.log(messages)
        })
    }
}