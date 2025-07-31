const container = document.querySelector('#container');
const title = document.querySelector('.title');

const playBtn = document.querySelector('#play');
const stopBtn = document.querySelector('#stop');

function getRandomColor() {
    let hex = "#" + Math.random().toString(16).slice(2, 8);
    return hex;
}

function bgChange() {
    let randomColor = getRandomColor();
    container.style.backgroundColor = randomColor;
    title.textContent = randomColor;
}

let intervalId = setInterval(bgChange, 1000);

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

playBtn.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(bgChange, 2000);
    }
});