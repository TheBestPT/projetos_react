import React from 'react'
import Questions from '../database/questions.json'
import Css from '../css/App.css'
import Image from '../img/big-machine.jpg'
export default class PainelPerguntas extends React.Component {
    constructor(){
        super()
        this.state = {
            currentQuestion : 0,
            images : this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/))
        }
    }
    render(){
        console.log(this.state.images)
        console.log(this.state.images[Questions.questions[this.state.currentQuestion].question_image].default)
        return (
            <div>
                <h2>Pergunta {this.state.currentQuestion + 1}</h2>
                <img src={this.state.images[Questions.questions[this.state.currentQuestion].question_image].default} />
                <h3><b>{this.state.currentQuestion + 1} - {Questions.questions[this.state.currentQuestion].question}</b></h3>
                <h4>Possible Answer</h4>
                <div className="answer" onClick={this.selectQuestion.bind(this)}>
                    <p><b>A - </b>{Questions.questions[this.state.currentQuestion].possible_answer[0]}</p>
                </div>
                <div className="answer" onClick={this.selectQuestion.bind(this)}>
                    <p><b>B - </b>{Questions.questions[this.state.currentQuestion].possible_answer[1]}</p>
                </div>
                <div className="answer" onClick={this.selectQuestion.bind(this)}>
                    <p><b>C - </b>{Questions.questions[this.state.currentQuestion].possible_answer[2]}</p>
                </div>
                <div className="answer" onClick={this.selectQuestion.bind(this)}>
                    <p><b>D - </b>{Questions.questions[this.state.currentQuestion].possible_answer[3]}</p>
                </div>
                <button onClick={this.nextQuestion.bind(this)}>Next</button>
            </div>
        )
    }

    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }

    nextQuestion() {
         
        this.state.currentQuestion == Questions.questions.length - 1 ? this.setState({currentQuestion : 0}) : this.setState({currentQuestion : this.state.currentQuestion + 1})   
    }

    selectQuestion(selector){
        selector.target.style.background = 'black'
    }
}