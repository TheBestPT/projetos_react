import React from 'react'
import config from '../config.json'
const SERVER = config.server
export default class Clientes extends React.Component{
    constructor(){
        super()
        this.state = {
            clientes : []
        }
    }

    async componentDidMount(){
        const clientes = await fetch(SERVER+'/getClients')
        let data = await clientes.json()
        console.log(data.clientes)
        this.setState({clientes : data.clientes})
    }


    render(){
        return (
            <div>
                <h1>Clientes</h1>
                <ul>
                    {this.state.clientes.map((item) => 
                        <li key={item.id}>Nome : {item.nome}, Morada :  {item.morada}, Nif - {item.nif}</li>
                    )}
                </ul>
            </div>
        )
    }
}