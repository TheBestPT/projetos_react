import React from 'react'
import Questions from '../database/questions.json'
import Questao from './Questao'
//https://www.dropbox.com/s/c7jgkqvidzmxmfm/questions.json?dl=0
export default class Painel extends React.Component{
    constructor(){
        super()
        this.state = {
            startQuiz : 0,
            endQuiz : 0
        }
    }
    render(){
        //console.log(new Date)
        console.log(this.state.startQuiz)
        return (
            <div className="questions_center">
                <Questao currentQuestion={this.props.currentQuestion} images={this.props.images}/>
                <div className="answer" id="0" onClick={this.props.selectQuestion.bind(this)}>
                    A - {Questions.questions[this.props.currentQuestion].possible_answer[0]}
                </div>
                <div className="answer" id="1" onClick={this.props.selectQuestion.bind(this)}>
                    B - {Questions.questions[this.props.currentQuestion].possible_answer[1]}
                </div>
                <div className="answer" id="2" onClick={this.props.selectQuestion.bind(this)}>
                    C - {Questions.questions[this.props.currentQuestion].possible_answer[2]}
                </div>
                <div className="answer" id="3" onClick={this.props.selectQuestion.bind(this)}>
                    D -{Questions.questions[this.props.currentQuestion].possible_answer[3]}
                </div>
                <button onClick={this.props.nextQuestion.bind(this)} className="button buttons">Next</button>
            </div>
        )
    }

    componentDidUpdate(prevProps){//Quando o conteudo é atualizado ou seja o botão next é clicado no PainelPerguntas o conteudo é renderizado de novo atualizando o props e ai o componentDidUpdate é chamado
        //console.log('update', prevProps, new Date)
        if(prevProps.currentQuestion == this.props.currentQuestion)
            console.log('u')
    }

    /*componentDidMount(){//Quando este component é renderizado o componetDidMount é chamado (igual ao onStart do android (JAVA))
        //console.log('Did Mount', new Date)
    }

    componentWillUnmount(){//Quando chegamos a última pergunta este componente deixa de ser chamado entao o metodo componentWillUnmount que é igual ao onDestroy do android (JAVA)
        //console.log('Unmount', new Date)
    }*/
    
    //componentWillUnmount()Quando chegamos a última pergunta este componente deixa de ser chamado entao o metodo componentWillUnmount que é igual ao onDestroy do android (JAVA)
    //componentDidMount()Quando este component é renderizado o componetDidMount é chamado (igual ao onStart do android (JAVA))
    //componentDidUpdate()Quando o conteudo é atualizado ou seja o botão next é clicado no PainelPerguntas o conteudo é renderizado de novo atualizando o props e ai o componentDidUpdate é chamado

    componentDidMount(){
        let date = new Date()
        this.setState({startQuiz : date})
        this.props.saveStartQuiz(date)
    }

    componentWillUnmount(){
        let date = new Date()
        this.setState({endQuiz : date})
        this.props.saveEndQuiz(date)
    }
}