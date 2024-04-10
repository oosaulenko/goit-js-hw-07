'use strict';

const inputName = document.querySelector('input#name-input');
const outputName = document.querySelector('span#name-output');
const outputNameDefault = outputName.textContent;

inputName.addEventListener('input', (event) => {
    outputName.textContent = event.target.value.trim() || outputNameDefault;
});
