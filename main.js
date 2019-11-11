const tempElement = document.querySelector(".temp-description p");
const notifyElement = document.querySelector(".notification");
const infoElement = document.querySelector(".weather-info p");
const locationElement = document.querySelector(".location p");

//dash stuff//

const weather = {};

weather.temperature = {
    unit: "fahrenheit"
}

//dash data//

const KELVIN = 273;
const key = "9ffa42dc1c134518653f98bd179a578b";

//user facing (geo)//
if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notifyElement.style.display = "block";
    notifyElement.innerHTML = `<p> Browser doesn't support Location</p>`;
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather (latitude,longitude);
}

//errors

 function showError(){
     notifyElement.style.display = "block";
     notifyElement.innerHTML = `<p> ${error.message} </p>`;
 }

 function getWeather (latitude, longitude) {
     let api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={9ffa42dc1c134518653f98bd179a578b}`;
 }

 fetch (api)
    .then (function(response){
        let data = response.json();
        return data;
    })
    .then (function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then (function){
        displayWeather ();
    });
}

    function displayWeather(){
        tempElement.innerHTML = `${weather.temperature.value}˚<span>F</span>`;
        infoElement.innerHTML = weather.description;
        locationElement.innerHTML = `${weather.city}, ${weather.country};`
    }