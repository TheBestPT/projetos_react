import React from 'react'
import Horario from './Horario'
export default class Confronto extends React.Component{
    render(){
        console.log(this)
        console.log(this.props.local)
        return (
            <div>
                <div>
                    <span>{this.props.local}</span>
                    <div>
                        <Horario data={this.props.data} hora={this.props.hora}/>
                    </div>
                </div>
            </div>
        )
    }
}