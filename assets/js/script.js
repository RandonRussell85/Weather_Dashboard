// form variables
let userFormEl = document.querySelector("#user-form");
let locationInputEl = document.querySelector("#location");
let locationBtnEl = document.querySelector("#button-addon2");

// location list variables
let locationResultsEl = document.querySelector(".list-group");

// Main weather content variables
let locationWeatherEl = document.querySelector(".main-weather");
let uvIndex = document.querySelector("#city-uv");
let dateEl = document.querySelector("#city-date");


// 5 day forecast variables
let fiveDayForecastEl = document.querySelector("#five-day-forecast");

// API key variable and Unit option
let apiKey = "&appid=42ed08cbc3e418fb0ee6724facf8348a&units=imperial"

// get the request from the weather API
let getCityLocation = function(city) {
    // format weather API url
    let weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;}