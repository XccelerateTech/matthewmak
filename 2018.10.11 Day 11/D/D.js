// D
// Using the Sunrise & Sunset API. Try to create a form to accept longtitude and latitude to query the sunrise and sunset time for that corresponding location.

$(function(){

    $('#form').submit(function(e) {
        e.preventDefault();
    });

    var serializedInput = $('#form').serializeArray();

    console.log(serializedInput);
    
    $('input[type=submit]').click(function(){
        
        $.ajax({
            type: 'GET',
            url: `https://api.sunrise-sunset.org/json?`,
            data: serializedInput,
            dataType: "json",
        }).done(function(data){
            console.log(data);
            $('h2').append(
                `<h3>
                    Sunrise Time:${JSON.stringify(data.results.sunrise)}
                    <br>
                    Sunset Time:${JSON.stringify(data.results.sunset)}
                </h3>`
            )
        }).fail(function(data){
            console.log('I failed you!')
        })

    })

});
