import React from 'react'
import ReactDOM from 'react-dom'
import Aplicacao from './components/Aplicacao'
import Button from './components/Button'
import Img from './components/Img'
import MsgEstatica from './components/MsgEstatica'
import MsgMain from './components/MsgMain'

//componentes funcao (usado para quando queremos implementar esta funcionalidade em qualquer lado e nao faz parte de nenhum objeto)
/*ReactDOM.render(
    <Button />,
    document.getElementById('root')
)*/

//renderizar imagem
/*ReactDOM.render(
    <Img />,
    document.getElementById('root')
)*/

/*ReactDOM.render(
    <MsgEstatica/>,
    document.getElementById('root')
)*/

ReactDOM.render(
    <MsgMain/>,
    document.getElementById('root')
)

/*ReactDOM.render(
    <Aplicacao />,
    document.getElementById('root')
)*/

//TESTAR RENDERIZAR DOIS JOGOS PARA VER SE A CONFLITO ENTRE PONTOS O QUE NAO ACONTECE 
/*ReactDOM.render(
    <Aplicacao />,
    document.getElementById('aplicacao')
)*/