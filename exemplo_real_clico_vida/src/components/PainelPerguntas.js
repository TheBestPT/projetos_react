import React from 'react'
import Questions from '../database/questions.json'
import ResultadoPerguntas from './ResultadoPerguntas'
import Painel from './Painel'

export default class PainelPerguntas extends React.Component {
    constructor() {
        super()
        this.state = {
            currentQuestion: 0,
            images: this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/)),
            answerSelected: [],
            startQuiz : null,
            endQuiz : null
        }
    }


    render() {
        if (this.state.currentQuestion !== Questions.questions.length) {
            return (
                <Painel 
                    currentQuestion={this.state.currentQuestion} 
                    selectQuestion={this.selectQuestion.bind(this)} 
                    nextQuestion={this.nextQuestion.bind(this)} images={this.state.images} 
                    saveStartQuiz={this.saveStartQuiz.bind(this)}
                    saveEndQuiz={this.saveEndQuiz.bind(this)}/>
            )
        } else {
            return (
                <ResultadoPerguntas resultado={this.state.answerSelected} image={this.state.images} date={{begin : this.state.startQuiz, end : this.state.endQuiz}}/>
            )
        }

    }

    importAll(r) {
        const images = {}
        r.keys().map((item) => images[item.replace('./', '')] = r(item))
        return images
    }

    nextQuestion() {
        if (!this.state.answerSelected[this.state.currentQuestion]) {
            alert('You have to answer the question!!')
            return
        }
        const element = document.getElementsByClassName('answer')
        for (let i = 0; i < element.length; i++) {
            element[i].classList.remove('answer_selected')
        }
        this.setState({ currentQuestion: this.state.currentQuestion + 1 })
    }

    selectQuestion(selector) {
        console.log(selector)
        const element = document.getElementsByClassName('answer')
        this.state.answerSelected.splice(this.state.currentQuestion, 1)
        for (let i = 0; i < element.length; i++) {
            element[i].classList.remove('answer_selected')
        }
        selector.target.classList.contains('answer_selected') ? selector.target.classList.remove('answer_selected') : selector.target.classList.add('answer_selected')
        let id = selector.target.id
        id = id.replace('Question', '')
        let question = this.state.currentQuestion
        const obj = {}
        obj[question - 1] = id
        !this.state.answerSelected[question] ? this.state.answerSelected.push(id) : this.setState({ answerSelected: obj })
        console.log(this.state.answerSelected)
        console.log(this.state.answerSelected)
    }

    saveStartQuiz(tempo){
        this.setState({startQuiz : tempo})
        console.log('guardado')
    }

    saveEndQuiz(tempo){
        this.setState({endQuiz : tempo})
        console.log(tempo - this.state.startQuiz)
        console.log('guardado fim')
    }
}