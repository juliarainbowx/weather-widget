const APIKEY = '9466c53e9b76508ed6d44cffe9be0f09';

function getWeather(city) {
    const furl = 'http://api.openweathermap.org/data/2.5/forecast?' +
    'q=' + city + '&units=metric' +
    '&APPID=' + APIKEY;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const jsonData = JSON.parse(xmlhttp.responseText);
            const weatherList = jsonData.list;

            if (weatherList.length) {
                weatherList
                    .filter(weather => {
                        const date = new Date(weather.dt_txt);
                        return date.getDay() != new Date().getDay() && date.getHours() === 15;
                    })
                    .forEach((e, i) => {
                        updateFields(e, i);
                });
            }
            
        }
    };
    xmlhttp.open('GET', furl, true);
    xmlhttp.send();
}

function updateFields(data, index) {
    let block = document.querySelector(".w-info.i" + index);

    let date = block.querySelector(".date");
    let img = block.querySelector(".img");
    let temp = block.querySelector(".temp");
    let parsedDate = new Date(data.dt_txt);

    date.innerHTML = parsedDate.getDay() + '/' + parsedDate.getMonth();
    img.src = 'img/codes/' + data.weather[0].id + '.png';
    temp.innerHTML = data.main.temp.toFixed(0) + "°C";
}

function initBlockFive() {
    const input = document.querySelector('.inputCity');
    const forecastName = document.querySelector(".forecastName");
    getWeather(forecastName.textContent);

    input.addEventListener("change", e => {
        const cityName = e.target.value;

        if (cityName.length === 0) {
            return;
        }

        forecastName.innerHTML = cityName;
        getWeather(cityName);
    });
}