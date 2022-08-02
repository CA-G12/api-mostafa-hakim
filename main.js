const searchInput = document.querySelector('.input-search');
const searchBtn = document.querySelector('.search-btn');


const key = '776f41f2e73c416078fa91fabe5ea7b4';

searchBtn.addEventListener('click', () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${key}`
  fetch(url, buildDom)
})


function fetch(url, cb) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if( xhr.readyState === 4) {
      if(xhr.status === 200) {
        let data = JSON.parse(xhr.responseText());

        cb(data);
      }

    }
  }

  xhr.open('GET', url)
  xhr.send();
}