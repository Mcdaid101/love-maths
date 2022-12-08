// wait for the DOM to finish loading before running the game 
// get the button elements and add event listeners to them 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {               // basically saying if you click submit it will alert to say you clicked submit 
                alert("You clicked Submit!");                                // and if you click anything else it will alert you to its game type
            } else {                                                           
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame () {

}

function checkAnswer () {
    
}

function calculateCorrectAnswer () {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion() {
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}