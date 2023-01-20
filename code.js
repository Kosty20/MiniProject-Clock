
const currentTime = new Date;

const hrBox = document.querySelector('.hours');
const minBox = document.querySelector('.minutes');
const secBox = document.querySelector('.seconds');

let hours = currentTime.getHours() - 12;
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();


if(hours < 10){
    hrBox.innerText = `0${hours}`
} else {
    hrBox.innerText = `${hours}`
}
if(minutes < 10){
    minBox.innerText = `0${minutes}`
} else {
    minBox.innerText = `${minutes}`
}