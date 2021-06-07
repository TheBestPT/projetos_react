import React from 'react'
import ReactDom from 'react-dom'
import Aplicacao from './components/Aplicacao'

/*
ReactDom.render(
    <h1>Ola, via render index.js</h1>,
    document.getElementById('aplicacao')
)*/

ReactDom.render(
    <Aplicacao/>,
    document.getElementById('aplicacao')
)