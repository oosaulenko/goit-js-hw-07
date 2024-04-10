'use strict';

const categories = document.querySelectorAll('ul#categories > li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
