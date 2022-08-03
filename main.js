let marker;
// Calling the map on page reloading on lon: 0 and lat: 0;
createMap();

const key = "776f41f2e73c416078fa91fabe5ea7b4";
searchBtn.addEventListener("click", () => {
  if (searchInput.value) {
    loading.setAttribute("class", "hidden");
    weekInfo.classList.remove("hidden");
  }
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${key}&units=metric`;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput.value}?unitGroup=metric&key=VPA2TH3SE9TJ9UYGQQBL9F33K&contentType=json`;
  daysContiner.textContent = '';
  fetch(url, (data) => {
    buildDom(data);
    week(data);
    updateMarker(data);
  });
});

function fetch(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      loading.classList.add('hidden')
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        cb(data);
        information.classList.remove("hidden");
      } else {
        loading.innerHTML = `<br><br>error ${xhr.status}<br><br>  Please enter the correct country or city name`;
        loading.classList.remove("hidden");
        information.classList.add("hidden");
        weekInfo.classList.add("hidden");
      }
    } else {
      loading.classList.remove('hidden')
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function week(data) {
  let max = 0;
  let min = data.days[0].tempmin;
  for (let i = 0; i < 7; i++) {
    if (max < data.days[i].tempmax) {
      max = data.days[i].tempmax;
    }
    if (min > data.days[i].tempmin) {
      min = data.days[i].tempmin;
    }
  }
  console.log(min)
  for (let i = 0; i < 7; i++) {
    buildDomWeakSection(data.days[i], max, min);
  }
}

function createMap() {
  // Making a map and tiles
  const map = L.map("map").setView([0, 0], 6);

  let tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  let attribution = "© OpenStreetMap";
  L.tileLayer(tileUrl, attribution).addTo(map);

  marker = L.marker([0, 0]).addTo(map);
}

function updateMarker(data) {
  marker.setLatLng([data.latitude, data.longitude]);
}
