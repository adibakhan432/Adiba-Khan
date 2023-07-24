var dayElem = document.querySelector(".day h1");
var hourElem = document.querySelector(".hour h1");
var minuteElem = document.querySelector(".minute h1");
var secondElem = document.querySelector(".second h1");



setInterval(function() {
    
var today = new Date();
var future = new Date(2024,0,1,0,0,0,0);

var d = future-today;

var sec = Math.floor((d/1000));
var min = Math.floor((d/(1000*60)));
var hour = Math.floor((d/(1000*60*60)));
var days = Math.floor((d/(1000*60*60*24)));

hour = hour % 24;

min = min % 60;

sec = sec % 60;

dayElem.textContent = days;
hourElem.textContent = hour;
minuteElem.textContent = min;
secondElem.textContent = sec;

}, 1000);

