let marker;
// Calling the map on page reloading on lon: 0 and lat: 0;
createMap();


const key = "776f41f2e73c416078fa91fabe5ea7b4";
searchBtn.addEventListener("click", () => {
  if (searchInput.value) {
    loading.setAttribute("class", "hidden");
  }
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${key}&units=metric`;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput.value}?unitGroup=metric&key=VPA2TH3SE9TJ9UYGQQBL9F33K&contentType=json`;
  fetch(url, buildDom, week);
  fetch(url, updateMarker);
});

function fetch(url, cb, cb2) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        cb(data);
        cb2(data);
        information.classList.remove("hidden");
      } else {
        loading.innerHTML = `<br><br>error ${xhr.status}<br><br>  Please enter the correct country or city name`;
        loading.classList.remove("hidden");
        information.classList.add("hidden");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function week(data) {
  for (let i = 0; i < 7; i++) {
    console.log(data.days[i]);
    buildDomWeakSection(data.days[i]);
  }
}

function createMap() {
  // Making a map and tiles
  const map = L.map("map").setView([0, 0], 6);

  let tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  let attribution = "© OpenStreetMap";
  L.tileLayer(tileUrl, attribution).addTo(map);

  marker = L.marker([0,0]).addTo(map);
}

function updateMarker(data) {
  marker.setLatLng([data.latitude, data.longitude])
}