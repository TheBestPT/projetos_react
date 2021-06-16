import React from 'react'

export default class Painel extends React.Component{
    render(){
        return (
            <div className="questions_center">
                <div className="answer" id="0Question" onClick={this.selectQuestion.bind(this)}>
                    A - {Questions.questions[this.state.currentQuestion].possible_answer[0]}
                </div>
                <div className="answer" id="1Question" onClick={this.selectQuestion.bind(this)}>
                    B - {Questions.questions[this.state.currentQuestion].possible_answer[1]}
                </div>
                <div className="answer" id="2Question" onClick={this.selectQuestion.bind(this)}>
                    C - {Questions.questions[this.state.currentQuestion].possible_answer[2]}
                </div>
                <div className="answer" id="3Question" onClick={this.selectQuestion.bind(this)}>
                    D -{Questions.questions[this.state.currentQuestion].possible_answer[3]}
                </div>
            </div>
        )
    }
}