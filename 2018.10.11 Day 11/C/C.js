// A
// Use JQuery method $.ajax to retrieve the data.json from your http-server.

$(function(){

    function informMe(endpoint,value){
        $.get(`https://restcountries.eu/rest/v2/${endpoint}/${value}`
        ).done(function(data){
            console.log(data);
            $('h1').append(
                `<h2>
                    ${JSON.stringify(data)}
                </h2>`
            )
        }).fail(function(data){
            console.log('I failed you!')
        })
    }
    
    informMe('name','japan')
    
});
