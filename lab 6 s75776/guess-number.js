function playGame(){
//Generates a random number between 1 and 10 
const randomNumber = Math.floor(Math.random() * 10) + 1;

//Prompt user to guess the number
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

//Validate the user's input
if(isNaN(userGuess)||userGuess<1||userGuess>10){
    alert("Please enter a valid number between 1 and 10.");
    return;
}

//check if the guess is correct
if(userGuess === randomNumber){
    alert("Good Work! You guessed it right.");
}else{
    alert(`Not matched, the correct number was ${randomNumber}.`);
}
}
