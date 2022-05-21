const count = document.querySelector('#count');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');


let countValue = 0;


increase.addEventListener('click', () => {
    countValue++;
    count.textContent = countValue;
    if(countValue > 0){
        count.style.color = 'green';
    }
    if(countValue === 32){
        alert('SJ 😀')
    }
})
reset.addEventListener('click', () => {
    countValue = 0;
    count.textContent = countValue;
    count.style.color = 'black';
})
decrease.addEventListener('click', () => {
    countValue--;
    count.textContent = countValue;
    if(countValue < 0){
        count.style.color = 'red';
    }
})

window.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'ArrowUp':
            countValue++;
            count.textContent = countValue;
            if(countValue > 0){
                count.style.color = 'green';
            }
            if(countValue === 32){
                alert('SJ 😀')
            };
            break;
        case 'ArrowDown':
            countValue--;
            count.textContent = countValue;
            if(countValue < 0){
                count.style.color = 'red';
            }
            break;
        case 'r':
            countValue = 0;
            count.textContent = countValue;
            count.style.color = 'black';
            break;
    }
})