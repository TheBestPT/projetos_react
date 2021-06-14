import React from 'react'
import BtnAtrib from './BtnAtrib'
export default class Jogador extends React.Component{
    //ATRIBUIR FUNCIONAL MAS CADA JOGADOR NAO PODE ALTERAR OS SEUS PONTOS E SIM O "JOGO"
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
                <BtnAtrib atribuirPontos={this.somarPonto.bind(this, this.state.pontos)}/>
            </div>
        )
    }

    somarPonto() {
        this.setState({pontos : this.state.pontos + 1})
    }
}