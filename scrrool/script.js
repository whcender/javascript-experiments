const menuBtn = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');


menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
})

// fixed navbar


const navBar = document.querySelector('.header');
const upperBtn = document.querySelector('.upper')


window.addEventListener('scroll', () => {
    if (window.scrollY > 140) {
        navBar.classList.add('fixed-nav');
        upperBtn.classList.add('show-btn');
        nav.classList.add('active-nav');
    } else {
        navBar.classList.remove('fixed-nav');
        upperBtn.classList.remove('show-btn');
        nav.classList.remove('active-nav');
    }
})

const btns = document.querySelectorAll('.btns');

// scrool position



btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        nav.classList.remove('active');
        e.preventDefault()

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop;
        let aboutTimes = 0

        if (id === 'about') {
            position += 100;
            aboutTimes += 1;
            if(aboutTimes == 2){
                position -= 200;
            }
        }

        window.scrollTo({
            top: position - 100,
            behavior: 'smooth'
        })




    })
})




// smooth scroll

