var weather;

var api = "http://api.openweathermap.org/data/2.5/weather?q="; 
var apiKey = "&APPID=9ffa42dc1c134518653f98bd179a578b";
var units = "&units=imperial";

var input; 

var button = document.getElementById("find")
find.addEventListener("click", displayWeather)

input = select ("city");

function displayWeather(){
var url = api + input.value() + apiKey + units;
    loadJSON (url, getInfo);
}

function getInfo (info){
    weather = info;
}
 


// const degreesElement = document.querySelector(".degrees p");
// const descripElement = document.querySelector(".temp-description p");
// const locationElement = document.querySelector(".location p");
 
// const weather = {};
// weather.temperature = {
//     unit: "fahrenheit"



