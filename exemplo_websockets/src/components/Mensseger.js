import React from 'react'
import config from '../config.json'
import socketIOClient from 'socket.io-client'
import Css from '../css/style.css'
import FormMessage from './FormMessage'
export default class Mensseger extends React.Component{
    constructor(){
      super()
      this.socket = socketIOClient(config.server)
      this.state = {
        message : '',//Mensagem a ser envidada
        id : 0,//id de identificacao no servidor
        username : 'Sem nome',//Username que pode não ser setado
        messageList : []//mensagens
      }
    }

    componentDidMount(){//Incializar a conecção com o servidor e buscar/setar as devidas informações
      this.socket.on('connection', (id) => {
        console.log(`Conectado`)
        //Buscar e ou setar id no servidor 
        !localStorage.getItem('id-user') ? this.setState({id : id}) : this.setState({id : localStorage.getItem('id-user')})
        if(!localStorage.getItem('id-user')) localStorage.setItem('id-user', id)
        this.socket.on("message", (mensagens) => {//Buscar mensagens ja ecistentes
          this.setState({messageList : mensagens})
        })
      })
    }
    
    render(){
      return (
        <>
          <FormMessage username={this.state.username} changeUser={this.changeUser.bind(this)} setUsername={this.setUsername.bind(this)} changeMessage={this.changeMessage.bind(this)} enviar={this.enviar.bind(this)}/>
          <ul>
            {this.state.messageList.map((message) =>
              <li>{message}</li>
            )}
          </ul>
          
        </>
      )
    }

    changeMessage(e){
      this.setState({message : e.target.value})
    }

    changeUser(e){
      this.setState({username : e.target.value})
    }

    enviar(){
      this.socket.emit('chat-message', {msg : this.state.message, id : this.state.id})
      this.setState({mensage : ''})
      //Enviar mensagem e carregar a nova mensagem no chat
      this.socket.on("message", (mensagens) => {
        this.setState({messageList : mensagens})
      })
    }

    setUsername(){//alterar username no servidor
      this.socket.emit('set-username', {username : this.state.username, id : this.state.id})
    }
}