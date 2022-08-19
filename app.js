console.log("My clock")

function updateClock(){
    let currentTime = new Date();

    let currentHour= currentTime.getHours();
    let currentMinute= currentTime.getMinutes();
    let currentSecond= currentTime.getSeconds();

    let timeOfDay = (currentHour<12) ? "AM" : "PM";

    // converting hour into 12hr format
    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0)? 12 : currentHour;

    // make minutes and sec two digits
    currentMinute = ((currentMinute<10) ? "0" : "") + currentMinute;
    currentSecond = ((currentSecond<10) ? "0" : "") + currentSecond;

    let currentTimeStr = currentHour + ":"+ currentMinute + ":" + currentSecond + " "+timeOfDay;
    let clock = document.getElementById("clock");
    clock.innerHTML = currentTimeStr;
}



