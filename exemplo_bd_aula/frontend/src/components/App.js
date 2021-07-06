import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            test : [],
            users : []
        }
    }

    componentDidMount(){
        this.getUser()
        this.getTest()
    }


    getUser(){
        const res = fetch('http://localhost:3001/user').then(async response => {
            this.setState({users : await response.json()})
        })
    }

    getTest(){
        const res = fetch('http://localhost:3001/test').then(async response => {
            this.setState({test : await response.json()})
        })
    }   


    render(){
        console.log(this.state.users)
        console.log(this.state.test)
        const user = this.state.users.map(user => {
            return <div key={user.id}>
                {user.id} - {user.nome} - {user.idade}
            </div>
        })
        return (
            <div>
                <h1>ola</h1>
            </div>
        )
    }
}