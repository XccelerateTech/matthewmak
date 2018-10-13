// A
// Use JQuery method $.ajax to retrieve the data.json from your http-server.

$(function(){
    $.ajax({
        url: '../data.json',
        type: 'GET',
    }).done(function(datagot){
        console.log(datagot);
        $('h1').append(
            `<h2>
                ${datagot}
            </h2>`
        )
    })
});