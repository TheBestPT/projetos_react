import React from 'react'
import Questions from '../database/questions.json'

export default class Questao extends React.Component{
    render(){
        return (
            <>
                <h1>You are a really true fan of Star Wars? Prove yourself!!</h1>
                <h2>Question {this.props.currentQuestion + 1}</h2>
                <img src={this.props.images[Questions.questions[this.props.currentQuestion].question_image].default} />
                <h2><b>{this.props.currentQuestion + 1} - {Questions.questions[this.props.currentQuestion].question}</b></h2>
                <h3>Possible Answer</h3>
            </>
        )
    }
}