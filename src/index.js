let now = new Date();

let h6 = document.querySelector("h6");

let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];

h6.innerHTML = `${day} ${month} ${date}, ${year} </br>  ${hours} : ${minutes}`;

function magicWeather(response) {
  console.log(response.data.weather[0].main);
  document.querySelector("h5").innerHTML = response.data.name;
  document.querySelector("#cantidad").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#feels").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#humedad").innerHTML = response.data.main.humidity;
  document.querySelector("#viento").innerHTML = response.data.wind.speed;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  celsiusTemperature = response.data.main.temp;
}

function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-text-input").value;
  let apiKey = "99c2f22aec3e799847013264380f5d8b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(magicWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function celsiusDisplay(event) {
  event.preventDefault();
  cantidad.innerHTML = Math.round(celsiusTemperature);
}

function farenheitDisplay(event) {
  event.preventDefault();
  let farenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  cantidad.innerHTML = Math.round(farenheitTemperature);
}

let celsiusTemperature = null;

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", celsiusDisplay);

let farenheitLink = document.querySelector("#farenheit");
farenheitLink.addEventListener("click", farenheitDisplay);
