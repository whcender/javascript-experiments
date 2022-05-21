const btn = document.getElementById('btn')
const sideBar = document.querySelector('.side-bar')
const main = document.querySelector('main')


btn.addEventListener('click', ()=>{
    sideBar.classList.toggle('show')
})
