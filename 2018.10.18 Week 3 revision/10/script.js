$(function(){

    $('button').click(function(){
        $.get('https://randomuser.me/api?results=2'
        ).done(function(data1){

            for(let i=0;i<2;i++){
                $.get(`https://api.sunrise-sunset.org/json?lat=${data1.results[i].location.coordinates.latitude}&lng=${data1.results[i].location.coordinates.latitude}`
                ).done(function(data2){
                    $('section').append(`<h3>${data1.results[i].name.first} ${data1.results[i].name.last} is in timezone GMT ${data1.results[i].location.timezone.offset}</h3>`);
                    $('section').append(`<h3>The sunrise time there is ${data2.results.sunrise} and the sunset time is ${data2.results.sunset}.</h3>`);
                })
            }
        })
    })
})