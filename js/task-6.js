'use strict';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    if (inputNumber.value < 1 || inputNumber.value > 100) return;

    const newBoxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        newBoxes.push(box);
        size += 10;
    }

    destroyBoxes();
    boxes.append(...newBoxes);
    inputNumber.value = '';
}

function destroyBoxes() {
    boxes.innerHTML = '';
}

const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');

const inputNumber = controls.querySelector('input[type="number"]');
const buttonCreate = controls.querySelector('button[data-create]');
const buttonDestroy = controls.querySelector('button[data-destroy]');

buttonCreate.addEventListener('click', () => {
    createBoxes(inputNumber.value);
});

buttonDestroy.addEventListener('click', destroyBoxes);

inputNumber.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    createBoxes(event.target.value);
});