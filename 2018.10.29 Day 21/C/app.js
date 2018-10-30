let ranchar = require('./numtochar')
let word = '';

function ranword(num){
    for (let i = 0;i<num;i++){
        word += ranchar();
    }
    console.log(word);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`How many letter do you want?`, (num) => {
    ranword(num);
    readline.close()
})