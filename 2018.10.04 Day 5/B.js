function reverse(num){
    var st1 = num.toString();
    st1 = st1.split("");
    var st2 = [];
    st1.forEach(element => {
        st2.unshift(Number(element));    
    });
    return st2;
}

console.log(reverse(12345));