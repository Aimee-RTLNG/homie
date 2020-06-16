

interface today {
    time: string;
    date: string;
    message: string;
}

function inter(today : today){
    console.log(today.time + ' ' + today.date);
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

function checkTime(i : number) {
    let y : string;
    if (i < 10) {
        y = "0" + i.toString();
    } else {
        y = i.toString();
    }; // add zero in front of numbers < 10
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
    if ( date.getHours() < 11 ) {
        message = "Bonne matinée";
    } else if ( date.getHours() > 11 && date.getHours() > 13 ) {
        message = "Bon appétit";
    } else if ( date.getHours() > 13 && date.getHours() > 17 ) {
        message = "Bon après-midi";
    } else if ( date.getHours() > 13 && date.getHours() > 17 ) {
        message = "Bonne soirée";
    } else if ( date.getHours() > 17 && date.getHours() < 23 ) {
        message = "Bonne fin de soirée";
    } else {
        message = "Bonne journée";
    }
    return message;
}

window.onload = () => {

    let date = new Date();
    let time = startTime();
    let message = getMsg();
    let interfaceExe = { time : time , date : date.toLocaleDateString('fr-FR'), message : message};

    var t = setInterval(startTime, 1000);

    inter(interfaceExe);
}
