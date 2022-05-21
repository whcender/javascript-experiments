const commnets =[
    {
        id: 0,
        name: 'Jhon Smith',
        job: 'Data Analyst',
        img: 'https://avatars.githubusercontent.com/u/2528813?v=4',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam in tempora ea! Doloribus vitae. '
    },
    {
        id: 1,
        name: 'Вася Пупкин',
        job: 'Backend Developer',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-nDXn1Xg8qOP0odcLuOkPZ7kpLzeGI-3FQ&usqp=CAU',
        text: 'I am a best web developer in the world and I am very happy to work with you. AHAHAHAHAH you lol i am the besttttts...', 
    },
    {
        id: 2,
        name: 'Taner Tolga',
        job: 'Frontend Developer',
        img: 'https://i.scdn.co/image/ab6761610000e5eb9237fc1aad61bfff2b76e747',
        text: 'Frontend is my life bro. I love this job so much... html, css and javascript are my favorite languages.'
    },
    {
        id: 3,
        name: 'Ender  Tekin',
        job: 'Blokchain Developer',
        img: 'https://avatars.githubusercontent.com/u/82971212?v=4',
        text: 'All code of this slider is in script.js go check now dude...! and of course dont forget to star the project'
    }
]

const namel = document.querySelector('#name');
const jobl = document.querySelector('#job');
const imgl = document.querySelector('#image');
const textl = document.querySelector('#texxt');
const lbtn = document.querySelector('#left-btn');
const rbtn = document.querySelector('#right-btn');


let currentItem = 0;


lbtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = commnets.length - 1;
    }
    showPerson();
});
rbtn.addEventListener('click', ()=>{
    currentItem++;
    if(currentItem > commnets.length - 1){
        currentItem = 0;
    }
    showPerson();
})

function showPerson(){
    const item = commnets[currentItem];
    namel.textContent = item.name;
    jobl.textContent = item.job;
    imgl.src = item.img;
    textl.textContent = item.text;
}