// E
// Calculate the time from the yesterday sunrise and sunset to NOW. And calculate and display the time from NOW to the tomorrow sunrise and sunset. The time should be in the format HH:MM:SS. 

//(Hints. Call the API with formatted=0 to get the full date string to be parsed)

$(function(){

    $('#form').submit(function(e) {
        e.preventDefault();
    });

    var serializedInput = [];
    var yesInput = [];
    var toInput = [];
    var tmrInput = [];
    var yesOutput = 0;
    var toOutput = 0;
    var tmrOutput = 0;
    
    
    $('input[type=submit]').click(function(){
        
        yesInput = $('#form').serializeArray();
        yesInput.push({name: "formatted", value: "0"});
        yesInput.push({name: "date", value: "yesterday"});

        toInput = $('#form').serializeArray();
        toInput.push({name: "formatted", value: "0"});
        toInput.push({name: "date", value: "today"});

        tmrInput = $('#form').serializeArray();
        tmrInput.push({name: "formatted", value: "0"});
        tmrInput.push({name: "date", value: "tomorrow"});

        var yesgetapi = $.ajax({
            type: 'GET',
            url: `https://api.sunrise-sunset.org/json?`,
            data: yesInput,
            dataType: "json",
        });
        
        var togetapi = $.ajax({
            type: 'GET',
            url: `https://api.sunrise-sunset.org/json?`,
            data: toInput,
            dataType: "json",
        })

        var tmrgetapi = $.ajax({
            type: 'GET',
            url: `https://api.sunrise-sunset.org/json?`,
            data: tmrInput,
            dataType: "json",
        })

        var curTime = new Date;

        $.when(yesgetapi,togetapi,tmrgetapi).done(function(res1,res2,res3){

            printresult('Yesterday Sunrise Time',res1[0].results.sunrise);
            printresult('Yesterday Sunset Time',res1[0].results.sunset);

            printresult('Today Sunrise Time',res2[0].results.sunrise);
            printresult('Today Sunset Time',res2[0].results.sunset);
            
            printresult('Tomorrow Sunrise Time',res3[0].results.sunrise);
            printresult('Tomorrow Sunset Time',res3[0].results.sunset);

            printresult('The Time Now',curTime);

            let yesSunriseTime = new Date(res1[0].results.sunrise);
            let yesSunsetTime = new Date(res1[0].results.sunset);
            let tmrSunriseTime = new Date(res3[0].results.sunrise);
            let tmrSunsetTime = new Date(res3[0].results.sunset);
            
            printresult('Time from yesterday sunrise to now',cvtTime(curTime - yesSunriseTime));
            printresult('Time from yesterday sunset to now',cvtTime(curTime - yesSunsetTime));
            printresult('Time from now to tomorrow sunrise',cvtTime(tmrSunriseTime - curTime));
            printresult('Time from now to tomorrow sunset',cvtTime(tmrSunsetTime - curTime));

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

function cvtTime(time) {
    time = Math.floor(time/1000);
    let second = time % 60;
    let minute = Math.floor(time/60) % 60;
    let hour = Math.floor(time/3600);
    return `${hour}:${minute}:${second}`;
}


