//days hours mins secs
//01 jan 00:00


let cDay;
let cHour;
let cMin;
let cSec;



let interval = window.setInterval(function(){
    let cDate = new Date();
    cHour = cDate.getHours();
    cMin = cDate.getMinutes();
    cSec = cDate.getSeconds();



    console.log(cHour,cMin,cSec);


},1000);