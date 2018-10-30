let Timer = require('./timer');
const timer = new Timer();

timer.on('remain',function(second){
    console.log(second);
})

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question(`How many second do you want to count? `, (second) => {
    timer.countdown(second);
    readline.close()
})

