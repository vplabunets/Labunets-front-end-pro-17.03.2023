const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const yearMonth = [
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
const degreeSign = "&#xb0";
const formEl = document.querySelector(".form");
const cardEl = document.querySelector(".card");
const inputEl = document.querySelector(".input-city");

formEl.addEventListener("click", onButtonClick);

function onButtonClick(ev) {
  ev.preventDefault();
  if (inputEl.value) {
    if (ev.target.nodeName === "BUTTON") {
      const inputCity = inputEl.value;
      formEl.reset();
      fetchWeatherByCity(inputCity)
        .then((post) => createPostMarkup(post))
        .catch((error) => console.log(error.message));
    }
  }
}

function fetchWeatherByCity(city) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
}

function createPostMarkup(post) {
  if (post) {
    const { main, weather, name } = post;
    const { temp, pressure, humidity } = main;

    const { description, icon } = weather[0];

    const currentDate = new Date();
    const day = currentDate.getDay();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const markup = `<div class="weather-card-wrap">
    <h2 class="card-title">Weather</h2>
    <div class="city"> ${name}</div>
    <div class="icon-wrap">
        <img src="http://openweathermap.org/img/w/${icon}.png" alt="weather-icon" width="130" height="130">
        <div class="descriptions-wrapper">
          <p class="description">${description}</p>
          <p class="humidity">Humidity: ${humidity}</p>
          <p class="pressure">Pressure: ${pressure}</p>
        </div>
    </div>
    <div class="day-wrap">
      <div class="day"> ${weekday[day]}</div>
      <div class="month-date-wrapper">
        <p class="month"> ${yearMonth[month]}</p>
        <p class="date"> ${date}</p>
        </div>
      </div>
      <div class="temperature-wrapper">
      <h3 class="temperature-name">Temperature</h3>
      <p class="temperature-value">${temp} ${degreeSign}</p>
      </div>
    </div>`;
    cardEl.innerHTML = markup;
  }
}
