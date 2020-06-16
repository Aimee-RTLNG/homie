var today = /** @class */ (function () {
    function today() {
    }
    return today;
}());
var weather = /** @class */ (function () {
    function weather() {
    }
    return weather;
}());
function setToday(today) {
    var date_display = document.getElementById('date-display');
    var photo_display = document.getElementById('photo-img');
    var time_display = document.getElementById('time-display');
    var message_display = document.getElementById('message-display');
    var credits_display = document.getElementById('credits-display');
    date_display.innerHTML = today.date;
    message_display.innerHTML = today.message;
    window.setInterval(function () { return time_display.classList.add("displayed"); }, 100);
    window.setInterval(function () { return date_display.classList.add("displayed"); }, 300);
    window.setInterval(function () { return photo_display.classList.add("displayed"); }, 500);
    window.setInterval(function () { return message_display.classList.add("displayed"); }, 600);
    window.setInterval(function () { return credits_display.classList.add("displayed"); }, 600);
}
function setWeather(weather) {
    console.log(weather);
    var weather_display = document.getElementById('weather-display');
    var weather_icon = document.getElementById('weather-icon');
    var weather_temp = document.getElementById('weather-temp');
    var weather_desc = document.getElementById('weather-desc');
    weather_temp.innerHTML = weather.temp + "°";
    weather_desc.innerHTML = weather.desc;
    if (weather.id < 300) {
        console.log("Thunderstorm");
        weather_icon.setAttribute("src", "./img/storm.gif");
    }
    else if (weather.id > 300 && weather.id < 499) {
        console.log("Drizzle");
        weather_icon.setAttribute("src", "./img/rain.gif");
    }
    else if (weather.id > 499 && weather.id < 599) {
        console.log("Rain");
        weather_icon.setAttribute("src", "./img/rain.gif");
    }
    else if (weather.id > 599 && weather.id < 699) {
        console.log("Snow");
        weather_icon.setAttribute("src", "./img/snow.gif");
    }
    else if (weather.id > 699 && weather.id < 800) {
        console.log("Atmosphere");
        weather_icon.setAttribute("src", "./img/sun.gif");
    }
    else if (weather.id == 800) {
        console.log("Clear");
        weather_icon.setAttribute("src", "./img/sun.gif");
    }
    else if (weather.id >= 801) {
        console.log("Clouds");
        weather_icon.setAttribute("src", "./img/sun.gif");
    }
    weather_display.classList.add("displayed");
}
function checkTime(i) {
    var y;
    if (i < 10) {
        y = "0" + i.toString();
    }
    else {
        y = i.toString();
    }
    ;
    return y;
}
function startTime(date) {
    if (date === void 0) { date = new Date(); }
    var h = date.getHours();
    var m = date.getMinutes();
    var heures = checkTime(h);
    var minutes = checkTime(m);
    var time = heures + ":" + minutes;
    var time_display = document.getElementById('time-display');
    time_display.innerHTML = time;
    return time;
}
function getMsg(date) {
    if (date === void 0) { date = new Date(); }
    var message;
    var hour = date.getHours();
    if (hour < 11) {
        message = "Bonne matinée";
    }
    else if (hour > 11 && hour < 13) {
        message = "Bon appétit";
    }
    else if (hour > 13 && hour < 17) {
        message = "Bon après-midi";
    }
    else if (hour > 17 && hour < 21) {
        message = "Bonne soirée";
    }
    else if (hour > 21 && hour < 23) {
        message = "Bonne fin de soirée";
    }
    else {
        message = "Bonne journée";
    }
    return message;
}
;
window.onload = function () {
    // Date et heure 
    var date = new Date();
    var time = startTime();
    var message = getMsg();
    var today = { time: time, date: date.toLocaleDateString('fr-FR'), message: message };
    setInterval(startTime, 1000); // Actualisation de l'heure
    setToday(today);
    // Météo 
    var xhr;
    var get_weather = function (callback) {
        var weather;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=3014078&appid=ff0c5236a672176a7f454c9a5c73c634&lang=fr&units=metric");
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                weather = xhr.response;
                var response = { temp: weather["main"]["temp"], id: weather["weather"][0]["id"], desc: weather["weather"][0]["description"] };
                callback(response);
            }
        };
        xhr.send(null);
    };
    get_weather(function (weather_info) { return setWeather(weather_info); });
};
