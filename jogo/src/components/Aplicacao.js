import React from 'react'
import Painel from './PainelAvaliacaoConteiner'

//PROVAR QUE DA PARA FAZER VARIOS JOGOS (NAO APARECEM DINAMICAMENTE PORQUE ESSE NAO ERA O FOCO) 
const infoContruct = {
    confrontos : [{
        confronto : {
            local : 'Porto',
            data : '12/06/2019',
            hora : "16:36"
        },
        jogador1 : {
            nome : 'The Best'
        },
        jogador2 : {
            nome : 'Fly'
        }
    },{
        confronto : {
            local : 'Madeira',
            data : '12/06/2021',
            hora : "16:384"
        },
        jogador1 : {
            nome : 'The Best PT'
        },
        jogador2 : {
            nome : 'Fly As'
        }
    }
    ]
}


const infoContruct2 = {
    confronto : {
        local : 'Madeira',
        data : '12/06/2021',
        hora : "16:384"
    },
    jogador1 : {
        nome : 'The Best PT'
    },
    jogador2 : {
        nome : 'Fly As'
    }
}

export default class Aplicacao extends React.Component{
    render(){
        return (
            <Painel confronto={infoContruct.confrontos[1].confronto} jogador1={infoContruct.confrontos[1].jogador1} jogador2={infoContruct.confrontos[1].jogador2} />
        )
    }
}