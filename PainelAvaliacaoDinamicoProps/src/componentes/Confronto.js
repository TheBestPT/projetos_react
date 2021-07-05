import React from 'react';
import Horario from './Horario';
export default class Confronto extends React.Component{
	render(){
		return (
				<div>
					<span>{this.props.local}</span>
					<div>
						<Horario data={this.props.data}
								 hora={this.props.hora}/>
					</div>
				</div>
		);
	}
}