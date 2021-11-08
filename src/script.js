function searchTempertature(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#city").innerHTML = response.data.name;
}

function searchCity(city) {
  axios
    .get(`${apiUrl}${city}&appid=${apiKey}&units=${units}`)
    .then(searchTempertature);
}

function getCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let apiKey = "16a7878dc2b4a449ac0b491099d29fe3";
let units = "metric";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

let search = document.querySelector("#search");
search.addEventListener("submit", getCity);

searchCity("London");

function showTemperature(response) {
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#city").innerHTML = response.data.name;
}

function getLocation(position) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`
    )
    .then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}

let currentLocationButton = document.querySelector("#current-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();
let todayDate = document.querySelector("#date");
todayDate.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;

function selectCelsius(event) {
  event.preventDefault();
  document.querySelector("#temp").innerHTML = "16";
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", selectCelsius);

function selectfahrenheit(event) {
  event.preventDefault();
  document.querySelector("#temp").innerHTML = "61";
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", selectfahrenheit);
