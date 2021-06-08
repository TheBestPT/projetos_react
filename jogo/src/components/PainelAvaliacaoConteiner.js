import React from 'react'
import Jogador from './Jogador'
import Confronto from './Confronto'


export default class PainelAvaliacaoConteiner extends React.Component{
    render(){
        return (
            <div>
                <div style={{float:'left'}}>
                    <Jogador />
                </div>    
                <div style={{float:'left'}}>
                    <Confronto />
                </div>    
                <div style={{float:'left'}}>
                    <Jogador/>
                </div>
            </div>
        )
    }
}