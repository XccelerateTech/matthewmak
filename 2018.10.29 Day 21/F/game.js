
const EventEmitter = require('events');
const Computer = require('./computer');
const Referee = require('./referee');
let computer = new Computer();
let referee = new Referee();

class Player extends EventEmitter {
    constructor(){
        super();
        this.final;
    }
}
const player = new Player;
player.on('chosen',function(){
    computer.choose();
    referee.chosen ++;
    referee.judge(player.final,computer.final);
});
computer.on('chosen',function(){
    referee.chosen ++;
    referee.judge(player.final,computer.final);
})

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question(`Rock, Paper or Scissors? `, (result) => {
    console.log(`You chose ${result.toLowerCase()}!`);
    player.final = result.toLowerCase();
    player.emit('chosen');
    readline.close();
})