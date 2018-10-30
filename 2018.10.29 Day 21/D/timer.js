const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor(){
        super();
    }

    countdown(second){
        const that = this;
        let count = setInterval(function(){
            if (second > 1) {
                second -= 1;
                that.emit('remain',second);
            } else {
                clearInterval(count);
                that.emit('remain','kaboom');
            }
        }, 1000)
    }
}

module.exports = Timer;