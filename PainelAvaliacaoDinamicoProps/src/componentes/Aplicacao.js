import React from 'react'
import * as $ from 'jquery'
import Painel from './PainelAvaliacaoContainer'

const infoConstruct = {
		confronto: {
			local: "Porto",
			data: "12/06/2019",
			hora: "12:45m",
		},
		jogador1: {
			nome: "Sérgio",
		},
		jogador2:{
			nome: "Maria",
		}
}

/*
Ciclo de vida de um componente 
Todos os componentes em react tem 3 fases no seu ciclo : 
1º fase - são montados no aplicativo(render)
2º fase - podem sofrer alterações (componentDidMount)
3º fase - são desmontados ou libertados 
Desta forma em cada fase do ciclo podemos interceptar e renderizar elementos. Devem ser definidps np contexto do componente
*/

export default class Aplicacao extends React.Component{
	constructor(props){
		super(props)
		this.state = {//Estadp da requisicao do pedido
			loaded : false
		}
	}

	getState(){
		return this.state
	}

	componentWillMount(){//Antes de renderizar  (invocar o metodo render), nesta fase podemos fazer alteracoes do estado ou propriedade
		console.log('O componente já foi instanciado, estou á espera que o metodo componentDidMount termine')
	}

	//metodo  acessor de alteracao dp estado do componente, o objeto tem que ser um array associativo
	defineState(obj){
		console.log('getState-Antes: ')
		console.log(this.getState())
		this.setState(obj)
		console.log('getState-Depois: ')
		console.log(this.getState())
	}


	componentDidMount(){
		setTimeout(() => {
			this.getData()
		}, 1000)
	}

	getData(){
		$.getJSON('data.json', (data) => {
			console.log('Response : '+data)
			//Alterar o estado da requisicao para verdadeiro e criar a informacao
			this.defineState({loaded : true, data : data})
		})
	}


	render(){
		console.log(this.state.data)
		if(!this.state.loaded){
			return <div>Loading....</div>
		}else{
			return <Painel 
					confronto={this.state.data.confronto} 
					jogador1={this.state.data.j1} 
					jogador2={this.state.data.j2} />
		}
	}
}