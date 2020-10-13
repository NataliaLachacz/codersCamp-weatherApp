let cityName= 'Warszawa';
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21a88e42777ae08261467dcb8e0bb323&units=metric`;

const date = document.querySelector("#date");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const tempMin = document.querySelector("#tempMin");
const tempMax = document.querySelector("#tempMax");
const temp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#icon");
const weatherTitle = document.querySelector("#weatherTitle");
const weatherDesc = document.querySelector("#weatherDescription");
const pressure = document.querySelector("#pressure");
const wind = document.querySelector("#wind");

const now = new Date();
date.textContent = `${(now.getHours() < 10) ? ("0" + now.getHours()) : now.getHours()}:${(now.getMinutes() < 10) ? ("0" + now.getMinutes()) : now.getMinutes()} ${(now.getDate() < 10) ? ("0" + now.getDate()) : now.getDate()}.${(now.getMonth()+1 < 10) ? ("0" + now.getMonth()+1) : (now.getMonth()+1)}.${now.getFullYear()}`;

const cityInput = document.querySelector("#cityInput");
const chooseCity = () => {
    cityName = cityInput.value;
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21a88e42777ae08261467dcb8e0bb323&units=metric`
    loadApi();
}

const pressSearch = (e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        searchButton.click();
    }
}

function loadApi() {
    fetch(apiUrl)
        .then(resp => resp.json())
        .then(resp => {
            city.textContent = resp.name;
            country.textContent = resp.sys.country;
            tempMin.textContent = resp.main.temp_min;
            tempMax.textContent = resp.main.temp_max;
            temp.textContent = resp.main.temp;
            weatherIcon.src = `https://openweathermap.org/img/wn/${resp.weather[0].icon}@2x.png`;
            weatherTitle.textContent = resp.weather[0].main;
            weatherDesc.textContent = resp.weather[0].description;
            pressure.textContent = resp.main.pressure;
            wind.textContent = resp.wind.speed;
        });
}

loadApi();

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener('click', chooseCity);
cityInput.addEventListener('keyup', pressSearch)