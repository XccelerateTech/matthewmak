function isEven(num){
    return num % 2 == 0;
}

function square(num){
    return num * num;
}

function sum(acc,num){
    return acc + num;
}

let array = [1,2,3,4,5,6,7,8];

let arraysq = [4,16,36,64];

console.log(array.filter(isEven).map(square).reduce(sum));
// console.log(array.reduce(sum).filter(isEven).map(square));
// console.log(array.reduce(sum).map(square).filter(isEven));
// console.log(array.reduce(map(square(filter(isEven)))));
