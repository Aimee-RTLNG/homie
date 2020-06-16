function inter(today) {
    console.log(today.time + ' ' + today.date);
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
function checkTime(i) {
    var y;
    if (i < 10) {
        y = "0" + i.toString();
    }
    else {
        y = i.toString();
    }
    ; // add zero in front of numbers < 10
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
    if (date.getHours() < 11) {
        message = "Bonne matinée";
    }
    else if (date.getHours() > 11 && date.getHours() > 13) {
        message = "Bon appétit";
    }
    else if (date.getHours() > 13 && date.getHours() > 17) {
        message = "Bon après-midi";
    }
    else if (date.getHours() > 13 && date.getHours() > 17) {
        message = "Bonne soirée";
    }
    else if (date.getHours() > 17 && date.getHours() < 23) {
        message = "Bonne fin de soirée";
    }
    else {
        message = "Bonne journée";
    }
    return message;
}
window.onload = function () {
    var date = new Date();
    var time = startTime();
    var message = getMsg();
    var interfaceExe = { time: time, date: date.toLocaleDateString('fr-FR'), message: message };
    var t = setInterval(startTime, 1000);
    inter(interfaceExe);
};
