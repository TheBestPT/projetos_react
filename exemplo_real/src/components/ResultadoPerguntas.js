import React from 'react'
import Questions from '../database/questions.json'
import App from '../css/App.css'
export default class ResultadoPerguntas extends React.Component{
    render(){
        let questions = Questions.questions
        let resultado = 0
        for (let i = 0; i < questions.length; i++) {
            if(questions[i].correct_answer == this.props.resultado[i])
                ++resultado
        }
        console.log(resultado)
        return (
            <div className="all_content">
                <h1>Your score {resultado}</h1>
                <h2>{Questions.question_qualify[resultado].phrase}</h2>
                <img src={this.props.image[Questions.question_qualify[resultado].img].default}/><br />
                <button className="button buttons" onClick={() => window.location.reload()}>Play again</button>
            </div>
        )
    }
}