function larger (num) {
    if (num <= 0 || isNaN(num)) {
        return 'Error';
    } else if (num >= 1000000) {
        return num;
    } else {
        while (num < 1000000) {
            num = num * 10
        }
        return num;
    }
}

larger (3);