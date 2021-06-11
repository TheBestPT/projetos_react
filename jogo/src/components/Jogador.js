import React from 'react'
import BtnAtrib from './BtnAtrib'
export default class Jogador extends React.Component{
    constructor(){
        super()
        this.state = {
            pontos : 0
        }
    }
    render(){
        return (
            <div>
                <h2>{this.props.nome}</h2>
                <h3>{this.state.pontos}</h3>
                <BtnAtrib atribuirPontos={this.somarPonto.bind(this)}/>
            </div>
        )
    }

    somarPonto() {
        console.log('u')
        this.setState({pontos : this.state.pontos + 1})
    }
}