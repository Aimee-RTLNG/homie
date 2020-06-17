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
var image = /** @class */ (function () {
    function image() {
    }
    return image;
}());
function setToday(today) {
    var date_display = document.getElementById('date-display');
    var time_display = document.getElementById('time-display');
    var message_display = document.getElementById('message-display');
    var credits_display = document.getElementById('credits-display');
    date_display.innerHTML = today.date;
    message_display.innerHTML = today.message;
    window.setInterval(function () { return time_display.classList.add("displayed"); }, 100);
    window.setInterval(function () { return date_display.classList.add("displayed"); }, 300);
    window.setInterval(function () { return message_display.classList.add("displayed"); }, 600);
    window.setInterval(function () { return credits_display.classList.add("displayed"); }, 600);
}
function setImage(image) {
    var image_url = (image['urls']['regular']);
    var image_caption = image['location']['title'];
    var image_display = document.getElementById('photo-img');
    if (!image_url) {
        image_url = "./img/blank.png";
    }
    var img = new Image();
    img.src = image_url;
    img.onload = function () {
        image_display.style.backgroundImage = "url(" + image_url + ")";
        window.setInterval(function () {
            image_display.classList.add("displayed");
            var caption_display = document.getElementById('photo-caption');
            if (image_caption) {
                caption_display.innerText = image_caption;
                caption_display.classList.add("displayed");
            }
            initDay();
        }, 500);
    };
}
function setWeather(weather) {
    var weather_display = document.getElementById('weather-display');
    var weather_icon = document.getElementById('weather-icon');
    var weather_temp = document.getElementById('weather-temp');
    var weather_desc = document.getElementById('weather-desc');
    weather_temp.innerHTML = Math.ceil(weather.temp) + "°C";
    weather_desc.innerHTML = weather.desc;
    if (weather.id < 300) {
        weather_icon.setAttribute("src", "./img/weather/storm.svg");
    }
    else if (weather.id > 300 && weather.id < 499) {
        weather_icon.setAttribute("src", "./img/weather/rain.svg");
    }
    else if (weather.id > 499 && weather.id < 599) {
        weather_icon.setAttribute("src", "./img/weather/rain.svg");
    }
    else if (weather.id > 599 && weather.id < 699) {
        weather_icon.setAttribute("src", "./img/weather/snow.svg");
    }
    else if (weather.id > 699 && weather.id < 800) {
        weather_icon.setAttribute("src", "./img/weather/couvert.svg");
    }
    else if (weather.id == 800) {
        weather_icon.setAttribute("src", "./img/weather/clear.svg");
    }
    else if (weather.id >= 801) {
        weather_icon.setAttribute("src", "./img/weather/clouds.svg");
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
function initDay() {
    // Date et heure 
    var date = new Date();
    var time = startTime();
    var message = getMsg();
    var today = { time: time, date: date.toLocaleDateString('fr-FR'), message: message };
    setInterval(startTime, 1000); // Actualisation de l'heure
    setToday(today);
    // Météo 
    var xhr;
    var weather_key = localStorage.getItem("KEY_WEATHER");
    var get_weather = function (callback) {
        var weather;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=48.82&lon=7.79&appid=" + weather_key + "&lang=fr&units=metric");
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
}
window.onload = function () {
    // Photo 
    var unsplash_key = localStorage.getItem("KEY_UNSPLASH");
    var get_url = function (callback) {
        var url;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.unsplash.com/photos/random/?client_id=" + unsplash_key + "&collections=10728712");
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var response = xhr.response;
                callback(response);
            }
            else {
                console.log('Limite API');
                callback("");
            }
        };
        xhr.send(null);
    };
    get_url(function (image) { return setImage(image); });
};
