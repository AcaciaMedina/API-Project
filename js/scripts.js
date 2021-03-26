$(document).ready(function() {
    var API_KEY = "15a3e48e873f739d6c94074a8089a871"


    $('form').submit(function() {
        var city = $('#city').val();
        var cityString = `${city}`



        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityString}&appid=${API_KEY}`, function(res) {
            console.log(res)
            var htmlString = `<h1>${cityString}</h1><p>Temperature: ${res.main.temp}&#8457;</p>`
            htmlString += `<p>Description: ${res.weather[0].description}</p><p>Wind Speed: ${res.wind.speed} mph</p>`
            $('#forecast').html(htmlString);

        }, 'json');
        return false;
    });

    $.get("https://api.nasa.gov/planetary/apod?api_key=lAR5JiFP3adLMZr81iR2EcPSVzs6UrGvU6UWHMuk", function(res) {
        console.log(res)
        var html_str = "";
        html_str += "<img src='" + res.url + "' alt='charcater img' />";
        $(".photo").html(html_str)
    }, "json")

    $('button').click(function() {
        $('img').animate({
            width: 'toggle'
        })
    })


})