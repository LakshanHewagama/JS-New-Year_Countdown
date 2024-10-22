//days hours mins secs
//01 jan 00:00


let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let daysLeft;
let daysPerYear;
let faysInFeb;



let interval = window.setInterval(function(){
    let cDate = new Date();
    cHour = cDate.getHours();
    cMin = cDate.getMinutes();
    cSec = cDate.getSeconds();
    cDay = cDate.getDate();
    cMonth = cDate.getMonth()+1;
    let cYear = cDate.getFullYear();
    

    if(cYear%4 == 0){
        daysPerYear = 366;
        daysInFeb = 29;
    }else{
        daysPerYear = 365;
        daysInFeb = 28;
    }

    


    switch(cMonth){
        case 1: daysLeft = daysPerYear;
        break;
        case 2: daysLeft = daysPerYear - (31);
        break;
        case 3: daysLeft = daysPerYear - (31 + daysInFeb);
        break;
        case 4: daysLeft = daysPerYear - (31 + 30 + daysInFeb);
        break;
        case 5: daysLeft = daysPerYear - (31 + 30 + 31 + daysInFeb);
        break;
        case 6: daysLeft = daysPerYear - (31 + 30 + 31 + 30 + daysInFeb);
        break;
        case 7: daysLeft = daysPerYear - (31 + 30 + 31 + 30 + 31 + daysInFeb);
        break;
        case 8: daysLeft = daysPerYear - (31 + 30 + 31 + 30 + 31 + 31 + daysInFeb);
        break;
        case 9: daysLeft = daysPerYear - (31 + 30 + 31 + 30 + 31 + 31 + 30 + daysInFeb);
        break;
        case 10: daysLeft = daysPerYear - (31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + daysInFeb);
        break; 
        case 11: daysLeft = daysPerYear - (31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + daysInFeb);
        break;
        case 12: daysLeft = daysPerYear - (31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + daysInFeb);
        break;
        
    }


    // console.log(cHour, cMin, cSec, cDay, cMonth);



    document.getElementById('seconds').innerHTML = 60 - cSec;
    document.getElementById('minutes').innerHTML = 60 - cMin;
    document.getElementById('hours').innerHTML = 24 - cHour;
    document.getElementById('days').innerHTML = daysLeft - cDay;


},1000);