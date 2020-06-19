# HOMIE
Homepage with a daily picture from an Unsplash collection (https://unsplash.com/collections/10728712/) and some widgets : time and date, greetings, weather (WIP) ...

Supposed to be similar to Tabliss

First project in Typescript 

*******************

# You have to use your own API keys :

Add this code in /js/config.js

```
var config = {
    KEY_WEATHER : 'OpenWeatherMap API key',
    KEY_UNSPLASH : 'Unsplash API key'
};
localStorage.setItem("KEY_WEATHER", config.KEY_WEATHER);  
localStorage.setItem("KEY_UNSPLASH", config.KEY_UNSPLASH);  
```
