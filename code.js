
const hrBox = document.querySelector('.hours');
const minBox = document.querySelector('.minutes');
const secBox = document.querySelector('.seconds');
const antePost = document.querySelector('.ante-post');

let currentTime;
let hours;
let minutes;
let seconds;

getClock();

setInterval(getClock, 1000)

function getClock() {
    currentTime = new Date;
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();

    if(hours > 12){
        hours -= 12;
        antePost.innerText = 'PM';
    }

    hours < 10 ? hrBox.innerText = `0${hours}` : hrBox.innerText = `${hours}`;
    minutes < 10 ? minBox.innerText = `0${minutes}` : minBox.innerText = `${minutes}`;
    seconds < 10 ? secBox.innerText = `0${seconds}` : secBox.innerText = `${seconds}`;
}
