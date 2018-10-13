class RandUser {
    constructor(obj){
        this.firstName = obj.name.first;
        this.lastName = obj.name.last;
        this.email = obj.email;
        this.dateOfBirth = obj.dob.date;
    }
}

var http = new XMLHttpRequest();

// onreadystatechange should be before http.send()
function createUser () {
    http.open('GET', `https://randomuser.me/api/?results=5`, true);
    
    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            let objs = JSON.parse(http.responseText);
            let ppl = objs.results.map(function(user){
                return new RandUser(user);
            });
            console.log(ppl);
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
}

createUser();



