import React from 'react'
import Questions from '../database/questions.json'
import Questao from './Questao'
export default class Painel extends React.Component{
    render(){
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
}