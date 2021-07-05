import React from 'react'
export default class BtnAtrib extends React.Component{
	toggleClick(e){
		console.log(e)
		e.preventDefault()
		this.props.atribuirPontos()
	}
	render(){
		return (
				<button onClick={this.toggleClick.bind(this)}>Atribuir</button>
		)
	}
}