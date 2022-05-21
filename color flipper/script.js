const btn = document.querySelector('.btn');
const color = document.getElementById('color');
const container = document.querySelector('.container');


btn.addEventListener('click', () => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    container.style.backgroundColor = randomColor;
    color.innerHTML = randomColor;
    color.style.color = randomColor;
});