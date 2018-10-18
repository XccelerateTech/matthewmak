$(function(){

    $('button').click(function(){
        $.get('https://randomuser.me/api?results=2'
        ).done(function(data1){

            let firstPerson = new Person(data1,0);
            firstPerson.getInfo();
            firstPerson.printInfo();
            let secondPerson = new Person(data1,1);
            secondPerson.getInfo();
            secondPerson.printInfo();
        })
    })    
})


class Person{
    constructor(data1,i){
        this.first = data1.results[i].name.first
        this.last = data1.results[i].name.last;
        this.name = this.first.charAt(0).toUpperCase() + this.first.slice(1) + ' ' + this.last.charAt(0).toUpperCase() + this.last.slice(1);
        this.timezone = data1.results[i].location.timezone.offset;
        this.lat = data1.results[i].location.coordinates.latitude;
        this.lng = data1.results[i].location.coordinates.longitude;
        this.data2 = {};
    }

    
    getInfo(){
        
        $.get(`https://api.sunrise-sunset.org/json?lat=${this.lat}&lng=${this.lng}`
        ).done(function(data2){
            this.data2 = data2;
            console.log(data2);
        });
    }
    
    printInfo(){
        console.log(this.data2)
        $('section').append(`<h3>${this.name} is in timezone GMT ${this.timezone}</h3>`);
        $('section').append(`<h3>The sunrise time there is ${this.data2.results.sunrise} and the sunset time is ${this.data2.results.sunset}.</h3>`);
    }
    
}