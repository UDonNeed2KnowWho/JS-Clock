var day;
var hours;
var minutes;
var seconds;
var today = new Date().getTime();
var endDate = new Date("November 17, 2017 12:01:00").getTime();
var timeleft = (endDate - today) /1000;
var countdown = (day + "d" + hours + "h" + minutes + "m" + seconds + "s");


setInterval(function() {
    
    var today = new Date().getTime();
    var timeleft = (endDate - today) /1000;
    
    day = parseInt(timeleft /86400);
    timeleft = (timeleft %86400);

    hours = parseInt(timeleft /3600);
    timeleft = (timeleft %3600);

    minutes = parseInt(timeleft /60);
    timeleft = (timeleft %60);

    seconds = parseInt(timeleft);
    
    document.getElementById("bob").innerHTML = (day + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    
}, 1000);














