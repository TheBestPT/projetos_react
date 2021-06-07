import React from 'react'
import CountInterno from './CountInterno'
export default class Count extends React.Component{

    constructor(){
        super()
        this.state = {
            count : 10
        }
    }

    somar10(){
        this.setState({count : this.state.count+=10})
    }

    sub10(){
        this.setState({count : this.state.count-=10})
    }

    render(){
        //return <CountInterno />
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.sub10.bind(this)}>-</button> 
                <button onClick={this.somar10.bind(this)}>+</button>
            </div>
        )
    }
}