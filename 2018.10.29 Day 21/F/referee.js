const EventEmitter = require('events');

class Referee extends EventEmitter {
    constructor (){
        super();
        this.chosen = 0;
    }

    judge(playerC,computerC){
        if (this.chosen == 2){
            if (playerC == computerC) {
                console.log('Draw')
            } else if (playerC == 'rock') {
                if (computerC == 'scissors') {
                    console.log('You won');
                } else {
                    console.log('You lose');
                }
            } else if (playerC == 'paper') {
                if (computerC == 'rock') {
                    console.log('You won');
                } else {
                    console.log('You lose');
                }
            } else if (playerC == 'scissors') {
                if (computerC == 'paper') {
                    console.log('You won');
                } else {
                    console.log('You lose');
                }
            }
        }
    }

}



module.exports = Referee;
