import React from 'react'
import config from '../config.json'
import socketIOClient from 'socket.io-client'
import Css from '../css/style.css'
import FormMessage from './FormMessage'
import Messages from './Messages'
export default class Menssger extends React.Component{
    constructor(){
      super()
      this.socket = socketIOClient(config.server)
      this.state = {
        message : '',
        id : 0,
        username : 'Sem nome'
      }


    }

    componentDidMount(){
      if(this.socket){
        this.socket.on('connection', (id) => {
          console.log(`Conectado`)
          !localStorage.getItem('id-user') ? this.setState({id : id}) : this.setState({id : localStorage.getItem('id-user')})
          if(!localStorage.getItem('id-user')) localStorage.setItem('id-user', id)
          console.log(this.state.id)
        })
      }
    }

  
    
    render(){
      /*return (
          <div className="divWrap">
            <p>Username: {this.state.username}</p>
            <input type="text" id="username" className="inputsText" onChange={this.changeUser.bind(this)} placeholder="Username..."/>
            <button onClick={this.setUsername.bind(this)}>Setar username</button>
            <input type="text" id="message" className="inputsText" onChange={this.changeMessage.bind(this)} placeholder="Message...."/>
            
            <button onClick={this.enviar.bind(this)}>Enviar mensagem</button>
            <ul id="messages">

            </ul>
          </div>
      )*/
      return (
        <>
          <FormMessage username={this.state.username} changeUser={this.changeUser.bind(this)} setUsername={this.setUsername.bind(this)} changeMessage={this.changeMessage.bind(this)} enviar={this.enviar.bind(this)}/>
          <Messages />
        </>
      )
    }//<p>{this.state.message}</p>

    changeMessage(e){
      console.log(e.target.value)
      this.setState({message : e.target.value})
    }

    changeUser(e){
      console.log(e.target.value)
      this.setState({username : e.target.value})
    }

    enviar(){
      console.log(this.state.id)
      this.socket.emit('chat-message', {msg : this.state.message, id : this.state.id})
      this.setState({mensage : ''})
      let msg = document.createElement('li')
      msg.append(this.state.message)
      document.getElementById('messages').append(msg)
    }


    listar(){
      console.log('listar')
      this.socket.on('global-messages', (args) => {
        console.log(args)
      })
    }

    setUsername(){
      this.socket.emit('set-username', {username : this.state.username, id : this.state.id})
    }
}