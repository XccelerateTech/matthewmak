function findString (num) {
    var String = '';
    if (num < 100 || num > 999999) {
        return 'Error';
    } else {
        num = num.toString();
        for (var i = num.length - 1; i > -1; i--) {
            switch (num[i]) {
                case '6':
                    String = String + 'a';
                    break;
                case '1':
                    String = String + 'b';
                    break;
                case '7':
                    String = String + 'd';
                    break;
                case '4':
                    String = String + 'e';
                    break;
                case '3':
                    String = String + 'i';
                    break;
                case '2':
                    String = String + 'l';
                    break;
                case '9':
                    String = String + 'm';
                    break;
                case '8':
                    String = String + 'n';
                    break;
                case '0':
                    String = String + 'o';
                    break;
                case '5':
                    String = String + 't';
                    break;
                
            }
        }
        return String;
    }
}

findString (123);