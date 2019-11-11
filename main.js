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
const key = "82005d27a116c2880c8f0fcb866998a0";

//user facing (geo)//
if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notifyElement.style.display = "block";
    notifyElement.innerHTML = "<p> Browser doesn't support Location</p>";
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