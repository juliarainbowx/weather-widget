var APIID = '8a41bff97ec26cb4d7dd28ad665b8dfb';

var bloc1Temp;
var bloc1Loc;
var block1Icon;
var bloc1Desc;

var block2Temp;
var block2Loc;
var block2Icon;
var  block2Desc;

var block3Temp;
var block3Loc;
var block3Icon;
var block3Desc;

var block4Temp;
var block4Loc;
var block4Icon;
var block4Desc;

var block5Temp;
var block5Loc;
var block5Icon;
var block5Desc;

function updateByID(id1, id2, id3, id4, id5) {
   var url = 'http://api.openweathermap.org/data/2.5/group?' +
       'id=' + id1 + ',' + id2 + ',' + id3 + ',' + id4 + ',' + id5 + '&units=metric' +
       '&APPID=' + APIID;

   sendRequest(url);
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.block1Icon = data.list[0].weather[0].id;
            weather.bloc1Loc = data.list[0].name;
            weather.bloc1Desc = data.list[0].weather[0].description;
            weather.bloc1Temp = (data.list[0].main.temp).toFixed(0) + ' °C';

            weather.block2Icon = data.list[1].weather[0].id;
            weather.block2Loc = data.list[1].name;
            weather.block2Desc = data.list[1].weather[0].description;
            weather.block2Temp = (data.list[1].main.temp).toFixed(0) + ' °C';

            weather.block3Icon = data.list[2].weather[0].id;
            weather.block3Loc = data.list[2].name;
            weather.block3Desc = data.list[2].weather[0].description;
            weather.block3Temp = (data.list[2].main.temp).toFixed(0) + ' °C';

            weather.block4Icon = data.list[3].weather[0].id;
            weather.block4Loc = data.list[3].name;
            weather.block4Desc = data.list[3].weather[0].description;
            weather.block4Temp = (data.list[3].main.temp).toFixed(0) + ' °C';

            weather.block5Icon = data.list[4].weather[0].id;
            weather.block5Loc = data.list[4].name;
            weather.block5Desc = data.list[4].weather[0].description;
            weather.block5Temp = (data.list[4].main.temp).toFixed(0) + ' °C';

            update(weather);
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function update(weather) {
    bloc1Temp.innerHTML = weather.bloc1Temp;
    bloc1Loc.innerHTML = weather.bloc1Loc;
    bloc1Desc.innerHTML = weather.bloc1Desc;
    block1Icon.src = 'img/codes/' + weather.block1Icon + '.png';

    block2Temp.innerHTML = weather.block2Temp;
    block2Loc.innerHTML = weather.block2Loc;
    block2Desc.innerHTML = weather.block2Desc;
    block2Icon.src = 'img/codes/' + weather.block2Icon + '.png';

    block3Temp.innerHTML = weather.block3Temp;
    block3Loc.innerHTML = weather.block3Loc;
    block3Desc.innerHTML = weather.block3Desc;
    block3Icon.src = 'img/codes/' + weather.block3Icon + '.png';

    block4Temp.innerHTML = weather.block4Temp;
    block4Loc.innerHTML = weather.block4Loc;
    block4Desc.innerHTML = weather.block4Desc;
    block4Icon.src = 'img/codes/' + weather.block4Icon + '.png';

    block5Temp.innerHTML = weather.block5Temp;
    block5Loc.innerHTML = weather.block5Loc;
    block5Desc.innerHTML = weather.block5Desc;
    block5Icon.src = 'img/codes/' + weather.block5Icon + '.png';
}

window.onload = function() {
    bloc1Temp = document.querySelector('.temperature');
    bloc1Loc = document.querySelector('.location');
    block1Icon = document.querySelector('.w-icon');
    bloc1Desc = document.querySelector('.description');

    block2Temp = document.querySelector('.temperature2');
    block2Loc = document.querySelector('.location2');
    block2Icon = document.querySelector('.w-icon2');
    block2Desc = document.querySelector('.description2');

    block3Temp = document.querySelector('.temperature3');
    block3Loc = document.querySelector('.location3');
    block3Icon = document.querySelector('.w-icon3');
    block3Desc = document.querySelector('.description3');

    block4Temp = document.querySelector('.temperature4');
    block4Loc = document.querySelector('.location4');
    block4Icon = document.querySelector('.w-icon4');
    block4Desc = document.querySelector('.description4');

    block5Temp = document.querySelector('.temperature5');
    block5Loc = document.querySelector('.location5');
    block5Icon = document.querySelector('.w-icon5');
    block5Desc = document.querySelector('.description5');

    updateByID(524901, 6058560, 5128581, 1850147, 5107152);

    initBlockFive();

    var refreshButton = document.querySelector("#button");

    refreshButton.addEventListener("click", e => {
        updateByID(524901, 6058560, 5128581, 1850147, 5107152);
        const forecastName = document.querySelector(".forecastName");
        getWeather(forecastName.textContent);
    })
}


