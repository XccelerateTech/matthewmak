let Timer = require('./timer');
const timer = new Timer();

timer.on('remain',function(second){
    console.log(second);
})

timer.on('pause',function(){
    timer.needPause = 1;
})

timer.on('start',function(){
    timer.countdown()
});

timer.on('stop',function(){
    timer.needPause = 1;
    setTimeout(function(){
        timer.needPause = 0;
        timer.start(9);
    },2000)
})

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question(`How many second do you want to count? `, (second) => {
    timer.start(second);
    readline.close()
})

setTimeout(function(){
    timer.pause();
    setTimeout(function(){
        timer.start();
        setTimeout(function(){
            timer.stop();
        },1500);
    }, 3000);
}, 4000);


