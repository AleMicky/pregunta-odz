
import {Question} from './Question.js'

export class Quiz {

    index = 0;
    score = 0;
    /**
     * 
     * @param {Question[]} question 
     */
    constructor(question){
        this.question = question
    }
    /**
     * 
     * @returns {Question}
     */

    getQuestionIndex(){
        return this.question[this.index]
    }

    isEnded (){
        return this.question.length === this.index
    }
    /**
     * 
     * @param {string} answer 
     */

    guess(answer){
        if(this.getQuestionIndex().correctAnswer(answer)){
                this.score ++ 
        }
        this.index ++
    }
}