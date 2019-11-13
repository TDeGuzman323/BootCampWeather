
function getData (){
    var cityLoc = $("#cityName").val();
    var api = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=9ffa42dc1c134518653f98bd179a578b&units=imperial"; 
    
    $.getJSON (api,giveWeatherData);
}


function giveWeatherData (weatherInfo){
    var cityLoc = weatherInfo.name;
    var weatherTemp = weatherInfo.temp;
    var weatherDescrip = weatherInfo.weather[0].description;
    var countryLoc = weatherInfo.sys.country;
    
    $(".container").append("The Weather in " + cityLoc + "," + countryLoc + " is currently" + weatherTemp + " and" + weatherDescrip);
}
