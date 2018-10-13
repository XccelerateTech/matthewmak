
$(function(){

    $('#form').submit(function(e) {
        e.preventDefault();
    });

    $('input[type=submit]').click(function(){
        
        var c1getapi = $.get(`https://restcountries.eu/rest/v2/name/${$('input[placeholder="Country 1"]')[0].value}`);
        var c2getapi = $.get(`https://restcountries.eu/rest/v2/name/${$('input[placeholder="Country 2"]')[0].value}`);

        $.when(c1getapi,c2getapi).done(function(c1op, c2op){
            console.log(c1op[0][0]['latlng']);
            console.log(c2op[0][0]['latlng']);

            let c1ip2 = [{name: "lat", value: c1op[0][0]['latlng'][0]},{name: "lng", value: c1op[0][0]['latlng'][1]},{name: "formatted", value: "0"}];
            let c2ip2 = [{name: "lat", value: c2op[0][0]['latlng'][0]},{name: "lng", value: c2op[0][0]['latlng'][1]},{name: "formatted", value: "0"}];

            var c1getapi2 = $.ajax({
                    type: 'GET',
                    url: `https://api.sunrise-sunset.org/json?`,
                    data: c1ip2,
                    dataType: "json",
            });
            var c2getapi2 = $.ajax({
                    type: 'GET',
                    url: `https://api.sunrise-sunset.org/json?`,
                    data: c2ip2,
                    dataType: "json",
            });

            $.when(c1getapi2,c2getapi2).done(function(c1op2,c2op2){
                printresult(`Today Sunrise of ${$('input[placeholder="Country 1"]')[0].value}`,c1op2[0].results.sunrise);
                printresult(`Today Sunset of ${$('input[placeholder="Country 1"]')[0].value}`,c1op2[0].results.sunset);
                printresult(`Today Sunrise of ${$('input[placeholder="Country 2"]')[0].value}`,c2op2[0].results.sunrise);
                printresult(`Today Sunset of ${$('input[placeholder="Country 2"]')[0].value}`,c2op2[0].results.sunset);

                let sunriseDiff = new Date(c1op2[0].results.sunrise) - new Date(c2op2[0].results.sunrise);
                let sunsetDiff = new Date(c1op2[0].results.sunset) - new Date(c2op2[0].results.sunset);

                if (sunriseDiff > 0){
                    printresult(`Sunrise of ${$('input[placeholder="Country 1"]')[0].value} is later than ${$('input[placeholder="Country 2"]')[0].value} by`,cvtTime(sunriseDiff,1000));
                } else {
                    printresult(`Sunrise of ${$('input[placeholder="Country 1"]')[0].value} is earlier than ${$('input[placeholder="Country 2"]')[0].value} by`,cvtTime(-sunriseDiff,1000));
                }

                if (sunsetDiff > 0){
                    printresult(`Sunset of ${$('input[placeholder="Country 1"]')[0].value} is later than ${$('input[placeholder="Country 2"]')[0].value} by`,cvtTime(sunsetDiff,1000));
                } else {
                    printresult(`Sunset of ${$('input[placeholder="Country 1"]')[0].value} is earlier than ${$('input[placeholder="Country 2"]')[0].value} by`,cvtTime(-sunsetDiff,1000));
                }
            })
        })
    })
});

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

function cvtTime(time,multiplier) {
    time = Math.floor(time/multiplier);
    let second = time % 60;
    let minute = Math.floor(time/60) % 60;
    let hour = Math.floor(time/3600);
    return `${hour}:${minute}:${second}`;
}


