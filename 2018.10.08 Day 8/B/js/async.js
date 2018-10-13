var http = new XMLHttpRequest();

// onreadystatechange should be before http.send()

function informMe (endpoint, value, callback) {
    http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`, true);

    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            callback(http.responseText);
        } else {
            console.log('error occurred' + http.status);
        }
    }

    http.send();
}

informMe('name','japan',function(callback){
    console.log(JSON.parse(callback));
})


