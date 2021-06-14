import React from 'react'
import Questions from '../database/questions.json'
export default class ResultadoPerguntas extends React.Component{
    render(){
        let questions = Questions.questions
        let resultado = 0
        for (let i = 0; i < questions.length; i++) {
            if(questions[i].correct_answer == this.props.resultado[i])
                ++resultado
        }
        return (
        <h1>
            {resultado}<br />
            {this.props.resultado}
        </h1>
        )
    }
}