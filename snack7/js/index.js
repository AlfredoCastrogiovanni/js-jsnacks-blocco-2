
const output = document.getElementById("output");

const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
let myInterval;

buttonStart.addEventListener("click", () => {
    myInterval = setInterval(() => {
    output.innerText = parseInt(output.innerText, 10) + 1
    }, 1000);
});

buttonStop.addEventListener("click", () => {
    clearInterval(myInterval);
});