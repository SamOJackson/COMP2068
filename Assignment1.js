/*Sam Jackson
*100137493
*2023/05/15
*COMP2068
*/

const prompt = require('prompt');

console.log("Please Enter 'Rock', 'Paper', or 'Scizors'");
prompt.get(['userSelection'], function(err, result) {
    // retrieve userSelection from result object
    let input = result.userSelection;
    input = input.toLowerCase();  
    console.log(input);

    // Use MATH.RANDOM to generate computer input
    let random = randomInt(1,3);
    let rps;
    if(random == 1){
        rps = "rock";
    }
    else if(random == 2){
        rps = "paper";
    }
    else if(random == 3){
        rps = "scizors";
    }
    console.log("Computer picks: " + rps);
    // PROCESS
    // Use if/else or switch statements to compare both selections and determine the winner
    if(rps == input){
        console.log("Tie!");              
    }
    if((rps == "scizors" && input == "paper") || (rps == "paper" && input == "rock") || (rps == "rock" && input == "scizors")){
        console.log("User Loses!");
    }
    if((input == "scizors" && rps == "paper") || ( input == "paper" && rps == "rock") || (input == "rock" && rps == "scizors")){
    // OUTPUT
        console.log("User Won!");
    }
});

function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }