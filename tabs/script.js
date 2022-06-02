const hbtn = document.getElementById('hbtn')
const vbtn = document.getElementById('vbtn')
const gbtn = document.getElementById('gbtn')

// history
const hH = document.querySelector('.h-h')
const hP = document.querySelector('.h-p')


//vision

const vH = document.querySelector('.v-h')
const vP = document.querySelector('.v-p')


//goals

const gH = document.querySelector('.g-h')
const gP = document.querySelector('.g-p')

hbtn.addEventListener('click', function () {
    if(hH.style.display === 'none'){
        hH.style.display = 'block'
        hP.style.display = 'block'
    }
    vH.style.display = 'none'
    vP.style.display = 'none'
    gH.style.display = 'none'
    gP.style.display = 'none'
    if(hbtn.style.backgroundColor == 'rgb(#CECCCC)'){
        hbtn.style.backgroundColor == "white"
    }
    vbtn.classList.remove('active')
    hbtn.classList.add('active')
    gbtn.classList.remove('active')
})  

vbtn.addEventListener('click', function () {
    if(vH.style.display === 'none'){
        vH.style.display = 'block'
        vP.style.display = 'block'
    }
    hH.style.display = 'none'
    hP.style.display = 'none'
    gH.style.display = 'none'
    gP.style.display = 'none'
    vbtn.classList.add('active')
    hbtn.classList.remove('active')
    gbtn.classList.remove('active')
})

gbtn.addEventListener('click', function () {
    if(gH.style.display === 'none'){
        gH.style.display = 'block'
        gP.style.display = 'block'
    }
    hH.style.display = 'none'
    hP.style.display = 'none'
    vH.style.display = 'none'
    vP.style.display = 'none'
    vbtn.classList.remove('active')
    hbtn.classList.remove('active')
    gbtn.classList.add('active')
})