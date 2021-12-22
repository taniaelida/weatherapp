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
