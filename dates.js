var day;
var hours;
var minutes;
var seconds;
var today = new Date().getTime();
var endDate = new Date("November 17, 2016 12:01:00").getTime();
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

var day2;
var hours2;
var minutes2;
var seconds2;
var today2 = new Date().getTime();
var endDate2 = new Date("December 25, 2016 12:01:00").getTime();
var timeleft2 = (endDate2 - today2) /1000;
var countdown2 = (day2 + "d" + hours2 + "h" + minutes2 + "m" + seconds2 + "s");


setInterval(function() {
    
    var today2 = new Date().getTime();
    var timeleft2 = (endDate2 - today2) /1000;
    
    day2 = parseInt(timeleft2 /86400);
    timeleft2 = (timeleft2 %86400);

    hours2 = parseInt(timeleft2 /3600);
    timeleft2 = (timeleft2 %3600);

    minutes2 = parseInt(timeleft2 /60);
    timeleft2 = (timeleft2 %60);

    seconds2 = parseInt(timeleft2);
    
    document.getElementById("joe").innerHTML = (day2 + "d " + hours2+ "h " + minutes2 + "m " + seconds2 + "s ");
    
}, 1000);


var day3;
var hours3;
var minutes3;
var seconds3;
var today3 = new Date().getTime();
var endDate3 = new Date("November 24, 2016 12:01:00").getTime();
var timeleft3 = (endDate3 - today3) /1000;
var countdown3 = (day3 + "d" + hours3 + "h" + minutes3 + "m" + seconds3 + "s");


setInterval(function() {
    
    var today3 = new Date().getTime();
    var timeleft3 = (endDate3 - today3) /1000;
    
    day3 = parseInt(timeleft3 /86400);
    timeleft3 = (timeleft3 %86400);

    hours3 = parseInt(timeleft3 /3600);
    timeleft3 = (timeleft3 %3600);

    minutes3 = parseInt(timeleft3 /60);
    timeleft3 = (timeleft3 %60);

    seconds3 = parseInt(timeleft3);
    
    document.getElementById("billy").innerHTML = (day3 + "d " + hours3 + "h " + minutes3 + "m " + seconds3 + "s ");
    
}, 1000);

















