# HOMIE
Homepage with a daily picture from an Unsplash collection () and some widgets : time and date, greetings, weather (WIP) ...

Supposed to give be similar to Tabliss

First project in Typescript 

https://aimee-rtlng.github.io/homie/

# How to make it work : 

Add config.js in /js
and add
`
    var config = {
        KEY_WEATHER : OpenWeatherMap API key,
        KEY_UNSPLASH : Unsplash API key
    };
    localStorage.setItem("KEY_WEATHER", config.KEY_WEATHER);  
    localStorage.setItem("KEY_UNSPLASH", config.KEY_UNSPLASH);  
` 
