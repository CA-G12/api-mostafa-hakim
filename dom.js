const searchInput = document.querySelector(".input-search");
const searchBtn = document.querySelector(".search-btn");
const loading = document.querySelector(".loading");
const information = document.querySelector(".information");



function buildDom(data) {
  let cityName = document.querySelector(".city-name");
  cityName.textContent = `Weather in ${data.name}`;
  let temp = document.querySelector(".temp");
  temp.textContent = `${data.main.temp}°C`;
  let icon = document.querySelector(".icon");
  icon.textContent = data.weather.icon;
  let description = document.querySelector(".description");
  description.textContent = data.weather[0].description;
  let humidity = document.querySelector(".humidity");
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  let wind = document.querySelector(".wind");
  wind.textContent = `Wind speed: ${data.wind.speed} km/h`;

  
  let mainContainer = document.querySelector('main');
  mainContainer.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${data.name}")`
  console.log(data.name)
}
