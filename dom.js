const searchInput = document.querySelector(".input-search");
const searchBtn = document.querySelector(".search-btn");
const loading = document.querySelector(".loading");
const information = document.querySelector(".information");
const daysContiner = document.querySelector(".days-continer");

function buildDom(data) {
  let cityName = document.querySelector(".city-name");
  cityName.textContent = `Weather in ${data.address}`;
  let temp = document.querySelector(".temp");
  temp.textContent = `${data.currentConditions.temp}°C`;
  let icon = document.querySelector(".icon");
  icon.textContent = data.currentConditions.icon;
  let description = document.querySelector(".description");
  description.textContent = data.description;
  let humidity = document.querySelector(".humidity");
  humidity.textContent = `Humidity: ${data.currentConditions.humidity}%`;
  let wind = document.querySelector(".wind");
  wind.textContent = `Wind speed: ${data.currentConditions.windspeed} km/h`;
  let mainContainer = document.querySelector("main");
  mainContainer.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${data.name}")`;
  console.log(data.name);
}

function buildDomWeakSection(data) {
  console.log("tesssssssssssst", data);
  let dayCard = document.createElement("div");
  dayCard.setAttribute("class", "day");
  daysContiner.appendChild(dayCard);

  let dateTime = document.createElement("h2");
  dateTime.setAttribute("class", "date-time");
  dateTime.textContent = data.datetime;
  dayCard.appendChild(dateTime);

  let temp = document.createElement("h1");
  temp.setAttribute("class", "temp");
  temp.textContent = `${data.temp}°C`;
  dayCard.appendChild(temp);

  let iconDescriptionContiner = document.createElement("div");
  iconDescriptionContiner.setAttribute("class", "icon-description-continer");
  dayCard.appendChild(iconDescriptionContiner);

  let icon = document.createElement("img");
  icon.setAttribute("class", "icon");
  icon.textContent = data.icon;
  iconDescriptionContiner.appendChild(icon);

  let description = document.createElement("p");
  description.setAttribute("class", "description");
  description.textContent = data.description;
  iconDescriptionContiner.appendChild(description);

  let humidity = document.createElement("p");
  humidity.setAttribute("class", "humidity");
  humidity.textContent = `Humidity: ${data.humidity}%`;
  dayCard.appendChild(humidity);

  let wind = document.createElement("p");
  wind.setAttribute("class", "wind");
  wind.textContent = `Wind speed: ${data.windspeed} km/h`;

  dayCard.appendChild(wind);
}

{
  /* <div class="day">
<h2 class="date-time">3/8/2022</h2>
<h1 class="temp">36°C</h1>
<div class="icon-description-continer">
  <img
    class="icon"
    src="https://openweathermap.org/img/wn/01d.png"
    alt=""
  />
  <p class="description">Clear Sky</p>
</div>
<p class="humidity">Humidity: 50%</p>
<p class="wind">Wind Speed:5.13 km/h</p>
</div> */
}
