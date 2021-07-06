import React from 'react'

export default class Clientes extends React.Component{
    render(){
        return (
            <div>
                <h3>Clientes</h3>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Morada</th>
                        <th>Nif</th>
                        <th>Edição</th>
                    </thead>
                    <tbody>
                        {this.props.clientes.map((item) => 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.morada}</td>
                                <td>{item.nif}</td>
                                <td>
                                    <div>
                                        <button onClick={this.props.apagar.bind(this, item.id)}>Delete</button> 
                                        <button onClick={this.props.editar.bind(this, item)}>Update</button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}