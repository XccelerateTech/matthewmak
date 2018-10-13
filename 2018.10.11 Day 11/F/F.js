// F
// Calculate whether the day length of the position of that latitude and longtitude is longer or shorter than Hong Kong’s day length at this moment. 

$(function(){

    $('#form').submit(function(e) {
        e.preventDefault();
    });

    var hkInput = [];
    var otherInput = [];

    $('input[type=submit]').click(function(){
        
        hkInput = [{name: "lat", value: "22.3964"},{name: "lng", value: "114.1095"},{name: "formatted", value: "0"}];

        otherInput = $('#form').serializeArray();
        otherInput.push({name: "formatted", value: "0"});

        var hkgetapi = $.ajax({
            type: 'GET',
            url: `https://api.sunrise-sunset.org/json?`,
            data: hkInput,
            dataType: "json",
        });
        
        var othergetapi = $.ajax({
            type: 'GET',
            url: `https://api.sunrise-sunset.org/json?`,
            data: otherInput,
            dataType: "json",
        })

        $.when(hkgetapi,othergetapi).done(function(res1,res2){

            printresult('Day length of Hong Kong',cvtTime(res1[0].results.day_length,1));
            printresult('Day length of your input',cvtTime(res2[0].results.day_length,1));
            printresult('Difference of day length',cvtTime(res1[0].results.day_length - res2[0].results.day_length,1));

        })

    })

    function printresult(title,value,brNo=0){
        
        console.log(`${title}: ${value}`)
        if (brNo=1) {
            $('div.result').append(
                `<h3>
                    ${title}: ${value}
                    <br>
                </h3>`
            )
        } else {
            $('div.result').append(
                `<h3>
                    ${title}: ${value}            
                </h3>`
            )
        }
    }

});

function cvtTime(time,multiplier) {
    time = Math.floor(time/multiplier);
    let second = time % 60;
    let minute = Math.floor(time/60) % 60;
    let hour = Math.floor(time/3600);
    return `${hour}:${minute}:${second}`;
}


