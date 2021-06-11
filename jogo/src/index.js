import React from 'react'
import ReactDOM from 'react-dom'
import Aplicacao from './components/Aplicacao'


ReactDOM.render(
    <Aplicacao />,
    document.getElementById('root')
)

//TESTAR RENDERIZAR DOIS JOGOS PARA VER SE A CONFLITO ENTRE PONTOS O QUE NAO ACONTECE 
/*ReactDOM.render(
    <Aplicacao />,
    document.getElementById('aplicacao')
)*/