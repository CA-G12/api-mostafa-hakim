const searchInput = document.querySelector(".input-search");
const searchBtn = document.querySelector(".search-btn");
const loading = document.querySelector(".loading");
const information = document.querySelector(".information");
const daysContiner = document.querySelector(".days-continer");
const weekInfo = document.querySelector('.situation-week')

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
  mainContainer.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${data.address}")`;
}

function buildDomWeakSection(data,max,min) {
  let dayCard = document.createElement("div");
  dayCard.setAttribute("class", "day");
  daysContiner.appendChild(dayCard);

  let dateTime = document.createElement("h2");
  dateTime.setAttribute("class", "date-time");
  dateTime.textContent = data.datetime;
  dayCard.appendChild(dateTime);

  let temp = document.createElement("h2");
  temp.setAttribute("class", "temp");
  if(data.tempmax ===max){
    dayCard.style.backgroundColor ="#FFC3C3"
}
  temp.textContent = `Max Temp: ${data.tempmax}°C`;
  dayCard.appendChild(temp);

  let minTemp = document.createElement("h3");
  minTemp.setAttribute("class", "minTemp");
  if(data.tempmin ===min){
    dayCard.style.backgroundColor ="#D6EFED"
}
  minTemp.textContent = `Min Temp: ${data.tempmin}°C`;
  dayCard.appendChild(minTemp);

  let iconDescriptionContiner = document.createElement("div");
  iconDescriptionContiner.setAttribute("class", "icon-description-continer");
  dayCard.appendChild(iconDescriptionContiner);

  let icon = document.createElement("img");
  icon.setAttribute("class", "icon");
  icon.src = `https://openweathermap.org/img/wn/01d.png`;
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
