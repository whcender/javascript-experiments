// time
// 1 sc = 1000 ms
// 1 min = 60 sc
// 1 hour = 60 min
// 1 day = 24 hour





const coundown = document.querySelector('.countdown')

function countDown() {
    let futureDate = new Date(2022, 9, 24, 10, 0, 0)
let currentDate = new Date()



currentDate = currentDate.getTime()
futureDate = futureDate.getTime()

equal = futureDate - currentDate


const day = ((1000 * 60 * 60 * 24))
const hour = ((1000 * 60 * 60))
const min = ((1000 * 60))

let gun = Math.floor(equal / day)
let saat = Math.floor(equal % (1000 * 60 * 60 * 24) / hour)
let dakika = Math.floor(equal % (1000 * 60 * 60) / min)
let saniye = Math.floor(equal % (1000 * 60 * 60) % (1000 * 60) / 1000)
    if (equal > 0) {
        coundown.innerHTML = `${gun} gün ${saat} saat ${dakika} dakika ${saniye} saniye`
    }
    if (equal <= 0) {
        coundown.innerHTML = `süre doldu`
    }
    if (dakika < 10) {
        dakika = `0${dakika}`
    }
    if (saniye < 10) {
        saniye = `0${saniye}`
    }
    if (saat < 10) {
        saat = `0${saat}`
    }
    
}

function update(){
    setInterval(()=>{
        countDown()
    },1000)
}

update()

