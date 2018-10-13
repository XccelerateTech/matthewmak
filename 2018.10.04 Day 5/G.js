function middle(arr) {
    var arr1 = arr.sort(function(first, second){
        return first > second;
    });
    var ind = 0;
    for (var i=0; i<3; i++) {
        if (arr[i] == arr[1]) {
            ind = i;
        }
    }
    return arr1[1] + ' at index ' + ind + ' lies between ' + arr1[2] + ' and ' + arr1[0];
}

var output = []
output.push(middle([2,3,1])); // 0 -> 2 at index 0 lies between 3 and 1
output.push(middle([88, 7, 55])); // 2 -> 55 lies between 7 and 88

output.forEach(element => {
    console.log(element);
});
