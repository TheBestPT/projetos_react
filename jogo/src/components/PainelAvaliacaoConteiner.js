import React from 'react'
import Jogador from './Jogador'
import Confronto from './Confronto'


export default class PainelAvaliacaoConteiner extends React.Component{
    constructor(){
        super()
        this.state = {
            pontos_jogador1 : 0,
            pontos_jogador2 : 0
        }
    }
    render(){
        console.log(this.props.confronto)
        return (
            <div>
                <div style={{float:'left'}}>
                    <Jogador nome={this.props.jogador1.nome} pontos={this.state.pontos_jogador1}/>
                </div>    
                <div style={{float:'left'}}>
                    <Confronto local={this.props.confronto.local} 
                    data={this.props.confronto.data} 
                    hora={this.props.confronto.hora}/>
                </div>    
                <div style={{float:'left'}}>
                    <Jogador nome={this.props.jogador2.nome} pontos={this.state.pontos_jogador2}/>
                </div>
            </div>
        )
    }


    atribuirPonto1(){
        this.setState({pontos_jogador1 :  this.state.pontos_jogador1 + 1})
    }

    atribuirPonto2(){
        this.setState({pontos_jogador2 :  this.state.pontos_jogador2 + 1})
    }

    /*somarPonto(ponto){

    }*/
}