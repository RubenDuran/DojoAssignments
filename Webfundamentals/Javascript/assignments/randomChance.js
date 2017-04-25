function ammountWon() {
    return Math.floor(Math.random() * 51) + 50;
}

function winningNumber() {
    return Math.trunc(Math.random() * 100);
}

function randChance(quaters) {
    // var quaters = quaters;
    for (quaters; quaters > 0; quaters--) {
        spin = winningNumber();
        console.log("Winning number is " + spin);
        if (spin === 50) {
            quaters += ammountWon();
            console.log("You Won " + quaters);
            if (quaters>=200) {
                console.log("I hit my goal");
                break;
            }
        }
        else {
            console.log("You lost!");
            console.log("You currently have " + quaters + " left");
        }
        }
        return quaters;
    }

randChance(100);
