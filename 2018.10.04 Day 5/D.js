function calAverage(arr){
    var sum = arr.reduce(function(acc,num){
        return acc + num;
    }, 0);
    var aver = Math.round(sum/arr.length);
    return aver;
}

console.log(calAverage([2,2,50]));