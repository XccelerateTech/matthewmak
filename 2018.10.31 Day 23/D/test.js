var arr = [1,2,3,4];

var finalArr = arr.reduce(function(acc, no){
    return (acc + no);
});

console.log(finalArr);