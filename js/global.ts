

class today {
    time: string;
    date: string;
    message: string;
}

class weather {
    id: number;
    temp: number;
    desc: string;
}

class image {
    url: URL;
    desc: string;
    author: string;
    location: string;
}

function setToday(today : today){
    let date_display = document.getElementById('date-display');
    let photo_display = document.getElementById('photo-img');
    let time_display = document.getElementById('time-display');
    let message_display = document.getElementById('message-display');
    let credits_display = document.getElementById('credits-display');

    date_display.innerHTML = today.date;
    message_display.innerHTML = today.message;

    window.setInterval( () => time_display.classList.add("displayed"), 100);
    window.setInterval( () => date_display.classList.add("displayed"), 300);
    window.setInterval( () => photo_display.classList.add("displayed"), 500);
    window.setInterval( () => message_display.classList.add("displayed"), 600);
    window.setInterval( () => credits_display.classList.add("displayed"), 600);
}

function setImage( image : object ){
    console.log(image);

}

function setWeather(weather : weather){
    console.log(weather);

    let weather_display = document.getElementById('weather-display');
    let weather_icon = document.getElementById('weather-icon');
    let weather_temp = document.getElementById('weather-temp');
    let weather_desc = document.getElementById('weather-desc');

    weather_temp.innerHTML = weather.temp + "°";
    weather_desc.innerHTML = weather.desc;

    if ( weather.id < 300 ) {
        weather_icon.setAttribute("src", "./img/storm.gif");
    } else if ( weather.id > 300 && weather.id < 499 ) {
        weather_icon.setAttribute("src", "./img/rain.gif");
    } else if ( weather.id > 499 && weather.id < 599 ) {
        weather_icon.setAttribute("src", "./img/rain.gif");
    } else if ( weather.id > 599 && weather.id < 699 ) {
        weather_icon.setAttribute("src", "./img/snow.gif");
    } else if ( weather.id > 699 && weather.id < 800 ) {
        weather_icon.setAttribute("src", "./img/sun.gif");
    } else if ( weather.id == 800 ) {
        weather_icon.setAttribute("src", "./img/sun.gif");
    } else if ( weather.id >= 801 ) {
        weather_icon.setAttribute("src", "./img/sun.gif");
    }

    weather_display.classList.add("displayed");

}

function checkTime(i : number) {
    let y : string;
    if (i < 10) {
        y = "0" + i.toString();
    } else {
        y = i.toString();
    };
    return y;
}

function startTime(date : Date = new Date()) {
    var h = date.getHours();
    var m = date.getMinutes();

    let heures : string = checkTime(h);
    let minutes : string = checkTime(m);
    let time : string =  heures + ":" + minutes ;
    let time_display = document.getElementById('time-display');

    time_display.innerHTML = time;

    return time;
}


function getMsg(date : Date = new Date()) {
    let message : string;
    let hour = date.getHours();
    if ( hour < 11 ) {
        message = "Bonne matinée";
    } else if ( hour > 11 && hour < 13 ) {
        message = "Bon appétit";
    } else if ( hour > 13 && hour < 17 ) {
        message = "Bon après-midi";
    } else if ( hour > 17 && hour < 21 ) {
        message = "Bonne soirée";
    } else if ( hour > 21 && hour < 23 ) {
        message = "Bonne fin de soirée";
    } else {
        message = "Bonne journée";
    }

    return message;
};

window.onload = () => {

    // Date et heure 

    let date = new Date();
    let time = startTime();
    let message = getMsg();
    let today = { time : time , date : date.toLocaleDateString('fr-FR'), message : message };

    setInterval(startTime, 1000); // Actualisation de l'heure
    setToday(today);

    // Météo 

    let xhr: XMLHttpRequest;

    let get_weather = callback => {

        var weather_key = config.KEY_WEATHER;

        let weather : object;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=3014078&appid="+weather_key+"&lang=fr&units=metric");
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                weather = xhr.response;
                let response = { temp : weather["main"]["temp"], id : weather["weather"][0]["id"], desc : weather["weather"][0]["description"] }
                callback( response );
            }
        }
        xhr.send(null);
    };

    get_weather(weather_info => setWeather(weather_info));

    // Photo 

    let get_url = callback => {

        var unsplash_key = config.KEY_UNSPLASH;

        let url : string;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.unsplash.com/photos/random/?client_id="+unsplash_key+"&collections=10728712");
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                let response = xhr.response;
                callback( response );
            } else {
                console.log( xhr.status );
            }
        }
        xhr.send(null);
    };

    get_url(image => setImage(image));
    
};
