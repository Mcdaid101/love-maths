// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {      // basically saying if you click submit it will alert to say you clicked submit 
                checkAnswer();                                      // and if you click anything else it will alert you to its game type
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;                                 //these are randomly generated numbers 
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {                                                 //if the game type is addition an addition question will be displayed 
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);         // checking our answer and retrieving it from the dom
    let calculatedAnswer = calculateCorrectAnswer();                                // getting our correct answer from the calculate correct answer function 
    let isCorrect = userAnswer === calculatedAnswer[0];                             // setting an is correct variable on whether the user answer matches the correct answer 


    if (isCorrect) {
        alert("Hey! You got it right! :D");
    } else {                                                                        // if it is true we will congratulate the user and if not commisorate them
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);             //function gets the value of the first number stored in operand 1
    let operator = document.getElementById("operator").innerText;                       // gets the value of the second number storing it in operand 2 
                                                                                        // stores plus in operator
    if (operator === "+") {
        return [operand1 + operand2, "addition"];                                       // first element will be result of op1 + op2 second element will be game type run
    } else {                                                                            // second element will be game type run until other wise said so it is addition
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}