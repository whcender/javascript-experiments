const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const popUp = document.querySelector('.pop-up')

openBtn.addEventListener('click', () => {
    popUp.classList.add('pop-up-active');
})
closeBtn.addEventListener('click', () => {
    popUp.classList.remove('pop-up-active');
});