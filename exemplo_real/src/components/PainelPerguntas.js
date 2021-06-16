import React from 'react'
import Questions from '../database/questions.json'
import Css from '../css/App.css'
import ResultadoPerguntas from './ResultadoPerguntas'
import Questao from './Questao'
export default class PainelPerguntas extends React.Component {
    constructor(){
        super()
        this.state = {
            currentQuestion : 0,
            images : this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/)),
            answerSelected : []
        }
    }
    render(){
        if(this.state.currentQuestion != Questions.questions.length){
            return (
                <div className="all_content">
                    <Questao currentQuestion={this.state.currentQuestion} images={this.state.images}/>
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
                    <button onClick={this.nextQuestion.bind(this)} className="button buttons">Next</button>
                </div>
            )
        }else{
            return (
                <ResultadoPerguntas resultado={this.state.answerSelected} image={this.state.images}/>
            )
        }
        
    }

    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    nextQuestion() {
       if(!this.state.answerSelected[this.state.currentQuestion]) {
            alert('You have to answer the question!!')
            return 
        }
        const element = document.getElementsByClassName('answer')
        for (let i = 0; i < element.length; i++) {
             element[i].classList.remove('answer_selected')           
        }
        this.setState({currentQuestion : this.state.currentQuestion + 1})
    }

    selectQuestion(selector){
        const element = document.getElementsByClassName('answer')
        this.state.answerSelected.splice(this.state.currentQuestion, 1)
        for (let i = 0; i < element.length; i++) {
             element[i].classList.remove('answer_selected')           
        }
        selector.target.classList.contains('answer_selected') ? selector.target.classList.remove('answer_selected') : selector.target.classList.add('answer_selected')
        let id = selector.target.id
        id = id.replace('Question', '')
        let question = this.state.currentQuestion
        !this.state.answerSelected[question] ? this.state.answerSelected.push(id) : this.state.answerSelected[question-1] = id
        console.log(this.state.answerSelected)
        console.log(this.state.answerSelected)
    }
}