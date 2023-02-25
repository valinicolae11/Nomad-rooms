

function menuButton() {
    const ICON_BUTTON = document.getElementById('btn');
    ICON_BUTTON.classList.toggle("change");

    if(ICON_BUTTON.classList.contains("change")){
        ICON_BUTTON.style.zIndex = "2";
        ICON_BUTTON.style.position = "fixed";
        const OVERLAY = document.getElementById("myNav");
        OVERLAY.style.width = "100%";
    }
    else{
        const OVERLAY = document.getElementById("myNav");
        OVERLAY.style.width = "0%"
        ICON_BUTTON.style.position = "initial";
    }
    
    
}

    const digitalSec = document.getElementById('secD');
    const digitalMin = document.getElementById('minD');
    const digitalHour = document.getElementById('hourD');
    const digitalDay = document.getElementById('dayD');
function setDigital() {
    let now = new Date().getTime();
    let future =  new Date("May 01, 2023 00:00:00").getTime();

    const timeLeft = future - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    digitalSec.textContent = seconds;
    digitalMin.textContent = minutes;
    digitalHour.textContent = hours;
    digitalDay.textContent = days;

}
setInterval(setDigital, 1000);

