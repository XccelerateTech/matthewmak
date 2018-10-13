var http = new XMLHttpRequest();

// onreadystatechange should be before http.send()

let list = [];

function informMe (callback) {
    http.open('GET', 'http://api.open-notify.org/astros.json', true);

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

informMe(function(callback){
    for (let i of JSON.parse(callback).people){
        list.push(i.name);
    }
    console.log(list);
})


