const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor(){
        super();
        this.second;
        this.needPause = 0;
    }

    countdown(){
        const that = this;
        let count = setInterval(function(){
            if ((that.second > 1)&&(that.needPause==0)) {
                that.second -= 1;
                that.emit('remain',that.second);
            } else if (that.needPause==1) {
                clearInterval(count);
            } else {
                clearInterval(count);
                that.emit('remain','kaboom');
            }
        }, 1000)
    }

    start(second){
        if (second == undefined) {
            this.needPause = 0;            
        } else {
            this.second = second;
        }
        this.emit('start');
    }

    pause(){
        this.emit('pause');
    }

    stop(){
        this.emit('stop');
    }
}

module.exports = Timer;