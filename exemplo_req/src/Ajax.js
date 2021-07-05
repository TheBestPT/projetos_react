import React from 'react'

export default class Ajax extends React.Component{
    //jsonserve.com
    constructor(){
        super()
        this.state = {
            list : []
        }
    }

    contructList = (data) =>{
        this.setState({list : data.list})
    }

    componentDidMount(){
        let url = 'https://sleepy-cliffs-19222.herokuapp.com/DcGjXt-vL.json'
        fetch(url).then(response => response.json()).then(this.contructList)
    }

    render(){
        console.log(this.state.list)
        return (
            <div>
                <ul>
                    {this.state.list.length > 0 ? (this.state.list.map((item) => {
                        <li>Nome: {item.nome}</li>
                    })) : <li>Erro</li>}
                </ul>
            </div>
        )
    }
}