import { getRandomColor } from './colorModule.js';
import { changeBackgroundColor } from './utils.js';

const button = document.getElementById('btn');
button.addEventListener('click', () => {
    const color = getRandomColor();
    changeBackgroundColor(color);
});