let idCity = 3099424;
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?id=${idCity}&units=metric&APPID=21a88e42777ae08261467dcb8e0bb323`;

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

const chooseId = (e) => {
    if (e.target.innerText === "Gdańsk") {
        idCity = 7531890;
        apiUrl = `http://api.openweathermap.org/data/2.5/weather?id=${idCity}&units=metric&APPID=21a88e42777ae08261467dcb8e0bb323`;

        loadApi();
    } else if (e.target.innerText === "Sopot") {
        idCity = 7531444;
        apiUrl = `http://api.openweathermap.org/data/2.5/weather?id=${idCity}&units=metric&APPID=21a88e42777ae08261467dcb8e0bb323`;
        loadApi();
    } else if (e.target.innerText === "Gdynia") {
        idCity = 3099424;
        apiUrl = `http://api.openweathermap.org/data/2.5/weather?id=${idCity}&units=metric&APPID=21a88e42777ae08261467dcb8e0bb323`;
        loadApi();
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
            weatherIcon.src = `http://openweathermap.org/img/wn/${resp.weather[0].icon}@2x.png`;
            weatherTitle.textContent = resp.weather[0].main;
            weatherDesc.textContent = resp.weather[0].description;
            pressure.textContent = resp.main.pressure;
            wind.textContent = resp.wind.speed;
        });
}

loadApi();

btnGdansk.addEventListener('click', chooseId);
btnSopot.addEventListener('click', chooseId);
btnGdynia.addEventListener('click', chooseId);