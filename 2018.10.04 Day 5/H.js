var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

function move(st){
    st = st.split('');
    var encr = st.map(function(n){
        let conv = letterArray.indexOf(n) + 10;
        if (conv > 25) {
            conv = conv - 26;
        }
        return letterArray[conv];
    });

    return encr.join('');
}


console.log(move('dog')); // the result should be 'nyq' as 'd' -> 'n' and so forth
