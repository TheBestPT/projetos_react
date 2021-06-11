import React from 'react'
import Jogador from './Jogador'
export default class BtnAtrib extends React.Component{
    toggleClick(e){
        console.log(e)
        e.preventDefault()
        this.props.atribuirPontos()
    }
    render(){
        console.log(this.props.atribuirPontos)
        return (
            //onClick={Jogador.somarPonto}
            <button onClick={this.toggleClick.bind(this)}>Atribuir</button>
        )
    }
}