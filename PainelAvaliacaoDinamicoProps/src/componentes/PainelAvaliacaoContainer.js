import React from 'react';

import Jogador from './Jogador';
import Confronto from './Confronto';

export default class PainelAvaliacaoContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			pontos_jogadorum: 10,
			pontos_jogador2: 0,
		};
	}
	
	atribuirPontosJUm(){
		this.setState({
			pontos_jogadorum: this.state.pontos_jogadorum+1,
		});
	}
	atribuirPontosJ2(){
		this.setState({
			pontos_jogador2: this.state.pontos_jogador2+1,
		});
	}

	componentDidUpdate(prevProps, prevState){
		if(this.state.pontos_jogadorum !== prevState.pontos_jogadorum)
			alert('Valor alterado J1')
		if(this.state.pontos_jogador2 !== prevState.pontos_jogador2)
			alert('Valor alterado J2')
	}

	render(){
		console.log(this.props)
		return(
				<div>
					<div style={{float:'left'}}>
						<Jogador nome={this.props.j1.nome} 
								 pontos={this.state.pontos_jogadorum}
								 atribuirPontos = {this.atribuirPontosJUm.bind(this)}		 
						/>
					</div>
					<div style={{float:'left'}}>
						<Confronto local={this.props.confronto.local}
								   data={this.props.confronto.data}
								   hora={this.props.confronto.hora}
						/>
					</div>
					<div style={{float:'left'}}>
						<Jogador nome={this.props.j1.nome} 
						         pontos={this.state.pontos_jogador2}
								 atribuirPontos = {this.atribuirPontosJ2.bind(this)}
						/>
					</div>
				</div>
		);
	}
}