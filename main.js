
const key = "776f41f2e73c416078fa91fabe5ea7b4";
searchBtn.addEventListener("click", () => {
  if (searchInput.value) {
    loading.setAttribute("class", "hidden");
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${key}&units=metric`;
  fetch(url, buildDom);
});

function fetch(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(xhr.status);
        cb(data);
        information.classList.remove("hidden");
      } else {
        loading.innerHTML =`<br><br>error ${xhr.status}<br><br>  Please enter the correct country or city name` ;
        loading.classList.remove("hidden");
        information.classList.add("hidden")

      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
