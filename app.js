const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max)+1;

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("U quit the game");
        break;
    }
    if(guess == random){
        console.log("Congrats!! u guessed right,random number was:",random);
        break;
    }
    else if (guess<random){
        guess = prompt("Hint : Your guess was too small, please try larger value");
    }
    else if (guess > random){
        guess = prompt("Hint : Your guess is too large, please enter smaller value");
    }
}