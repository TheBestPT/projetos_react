import React from 'react';
import BtnAtrib from './BtnAtrib';
export default class Jogador extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			permitido : 'Nao'
		}
	}

	componentDidMount(){
		console.log(this.props)
		this.setState({permitido : "Sim", nome : this.props.nome})
	}

	render(){
		return (
				<div>
					<h1>{this.state.permitido} - {this.state.nome}</h1>
					<h2>{this.props.nome}</h2>
					<h3>{this.props.pontos}</h3>
					<BtnAtrib atribuirPontos={this.props.atribuirPontos} />
					<p><span>Valor via json : {this.props.permitir}</span></p>
				</div>
		);
	}
}