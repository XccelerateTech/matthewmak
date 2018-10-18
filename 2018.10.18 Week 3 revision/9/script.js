$(function(){
    $('button').click(function(){
        $.get('https://randomuser.me/api/'
        ).done(function(data){
            $('section').append(`<h3>${data.results[0].name.first} ${data.results[0].name.last}</h3>`);
        })
    })
})
