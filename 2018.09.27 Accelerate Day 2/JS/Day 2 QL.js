function countChar (Str, word) {
    var j = 0;
    Str = Str.toLowerCase();
    for (var i = Str.length -1; i > -1; i--) {
        if (Str[i] == word) {
            j++;
        }
    }
    return j;
}

countChar("fizzbuzz","z"); // 4
countChar("Fancy fifth fly aloof","f"); // 5