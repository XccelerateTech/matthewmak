
const EventEmitter = require('events');

class Computer extends EventEmitter {
    constructor(){
        super();
        this.choices = ['rock', 'paper', 'scissors']
        this.final;
    }

    choose(){
        this.final = this.choices[Math.floor(Math.random() * 3)];
        console.log(`The computer chose ${this.final}!`);
        this.emit('chosen');
    }
}



module.exports = Computer;