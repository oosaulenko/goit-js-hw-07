'use strict';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');

buttonChangeColor.addEventListener('click', () => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    spanColor.textContent = color;
});
