// @ts-check
import { questions } from './data/question.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'

/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */
const renderPage = (quiz, ui) => {

    if(quiz.isEnded()){
      ui.showScores(quiz.score);
    }else{
        ui.showQuestion(quiz.getQuestionIndex().question);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice);
            renderPage(quiz, ui);
        }
        );
        ui.showProgress(quiz.index + 1,questions.length);
    }
}



function main() {
    const quiz = new Quiz(questions)
    const ui = new UI();
    renderPage(quiz, ui);
}
main()