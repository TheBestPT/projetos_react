import React from 'react'
import Questions from '../database/questions.json'
import Questao from './Questao'
export default class Painel extends React.Component{
    render(){
        //console.log(new Date)
        //console.log(this.state.startQuiz)
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
                    D - {Questions.questions[this.props.currentQuestion].possible_answer[3]}
                </div>
                <button onClick={this.props.nextQuestion.bind(this)} className="button buttons">Next</button>
            </div>
        )
    }

    componentDidUpdate(prevProps){//Quando o conteudo é atualizado ou seja o botão next é clicado no PainelPerguntas o conteudo é renderizado de novo atualizando o props e ai o componentDidUpdate é chamado
        //é exucutado antes do metodo render()
        //É usado para quando uma prop ou state é atualizada e é necessário buscar dados á api
        if(this.props.currentQuestion !== prevProps.currentQuestion)//exemplo simples e tem de estar involvido num if para nao ficar infitinito principalmente alterando propriedades state
            console.log("Posição anterior da pergunta: "+prevProps.currentQuestion+" Posição da atual da pergunta: "+this.props.currentQuestion)
    }
    
    //componentWillUnmount()Quando chegamos a última pergunta este componente deixa de ser chamado entao o metodo componentWillUnmount que é igual ao onDestroy do android (JAVA)
    //componentDidMount() Quando este component é renderizado o componetDidMount é chamado (igual ao onStart do android (JAVA))
    //componentDidUpdate()Quando o conteudo é atualizado ou seja o botão next é clicado no PainelPerguntas o conteudo é renderizado de novo atualizando o props e ai o componentDidUpdate é chamado

    componentDidMount(){//Guardar a data de começo do quiz
        let date = new Date()
        this.props.saveStartQuiz(date)
    }

    componentWillUnmount(){//Guardar a hora que acabou o desafio para calcular quanto tempo demorou a acabar o desafio
        let date = new Date()
        this.props.saveEndQuiz(date)
    }
}