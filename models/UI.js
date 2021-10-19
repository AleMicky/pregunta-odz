export class UI {
    constructor() { }

    /**
     * 
     * @param {string} text 
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text;
    }

    /**
     * 
     * @param {string[]} choices 
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';
        for (let index = 0; index < choices.length; index++) {
            const button = document.createElement("button");
            button.innerText = choices[index];
            button.className = 'button'
            button.addEventListener('click', () => callback(choices[index]))
            choicesContainer.append(button);
        }
    }
    /**
     * 
     * @param {number} score 
     */
    showScores(score) {
        const quizEndHTML = `
            <h1>Resultado</h1>
            <h2>Tu puntuaje: ${score}</h2>
        `;

        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML;
    }

    /**
     * 
     * @param {number} index 
     * @param {number} total 
     */
    showProgress(index, total){
     const element = document.getElementById('progress');
     element.innerHTML = `Pregunta ${index} de ${total}`;
    }
}