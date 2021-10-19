export class Question {

    /**
     * 
     * @param {string} question Es la pregunta
     * @param {string[]} choices Son la opciones de la pregunta
     * @param {string} answer Es la respuesta
     */

    constructor(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choices Algun texto 
     * @returns {boolean} return true si la respuesta es correcto
     */
    correctAnswer(choices) {
        return choices === this.answer;
    }


}