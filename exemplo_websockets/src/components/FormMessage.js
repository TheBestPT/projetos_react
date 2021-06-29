import React from 'react'
import Css from '../css/style.css'

export default class FormMessage extends React.Component{
    render(){
        return (
            <div className="divWrap">
            <p>Username: {this.props.username}</p>
            <input type="text" id="username" className="inputsText" onChange={this.props.changeUser.bind(this)} placeholder="Username..."/>
            <button onClick={this.props.setUsername.bind(this)}>Alterar username</button>
            <input type="text" id="message" className="inputsText" onChange={this.props.changeMessage.bind(this)} placeholder="Message...."/>
            
            <button onClick={this.props.enviar.bind(this)}>Enviar mensagem</button>
            <ul id="messages">

            </ul>
          </div>
        )
    }
}