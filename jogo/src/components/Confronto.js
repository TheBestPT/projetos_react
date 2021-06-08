import React from 'react'
import Horario from './Horario'
export default class Confronto extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <span>Funchal</span>
                    <div>
                        <Horario />
                    </div>
                </div>
            </div>
        )
    }
}