const menu = [
    {
        id : 1,
        tittle : "Anne Makarnası",
        category : "Pasta",
        price : 20.99,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYMxEu27xBHIBHrsYjdXWoptHsDWRe2BS8A&usqp=CAU",
        desc : "PASTA PASTA PASTA PASTA PASTAPASTA PASTA PASTA PASTA PASTAPASTA PASTA PASTA PASTA PASTAPASTA PASTA PASTA PASTA PASTA"
    },
    {
        id : 2,
        tittle : "Anne Keki",
        category : "Dessert",
        price : 15.99,
        img : "https://cdn.pixabay.com/photo/2022/03/01/09/36/chocolate-7040950_960_720.jpg",
        desc : "cakecakecakecakecakecake cakecake cakecake cakecakecake"
    },
    {
        id : 3,
        tittle : "Anne Keki",
        category : "Dessert",
        price : 15.99,
        img : "https://cdn.pixabay.com/photo/2022/03/01/09/36/chocolate-7040950_960_720.jpg",
        desc : "cakecakecakecakecakecake cakecake cakecake cakecakecake"
    },
    {
        id : 4,
        tittle : "Anne Makarnası",
        category : "Pasta",
        price : 20.99,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYMxEu27xBHIBHrsYjdXWoptHsDWRe2BS8A&usqp=CAU",
        desc : "PASTA PASTA PASTA PASTA PASTAPASTA PASTA PASTA PASTA PASTAPASTA PASTA PASTA PASTA PASTAPASTA PASTA PASTA PASTA PASTA"
    },
    {
        id : 5,
        tittle : "Anne Keki",
        category : "Dessert",
        price : 15.99,
        img : "https://cdn.pixabay.com/photo/2022/03/01/09/36/chocolate-7040950_960_720.jpg",
        desc : "cakecakecakecakecakecake cakecake cakecake cakecakecake"
    },
    {
        id : 6,
        tittle : "Anne Makarnası",
        category : "Pasta",
        price : 20.99,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYMxEu27xBHIBHrsYjdXWoptHsDWRe2BS8A&usqp=CAU",
        desc : "PASTA PASTA PASTA PASTA PASTAPASTA PAA PASTAPASTA PASTA PASTA PASTA PASTA"
    },
    {
        id : 7,
        tittle : "Anne Keki",
        category : "Dessert",
        price : 15.99,
        img : "https://cdn.pixabay.com/photo/2022/03/01/09/36/chocolate-7040950_960_720.jpg",
        desc : "BİG CAKE! cakecakecakecakecakecake cakecake cakecake cakecakecake"
    },
]

const allBtn = document.getElementById('all');
const cakeBtn = document.getElementById('cake');
const pastaBtn = document.getElementById('pasta');

const sectionCenter = document.querySelector(".section-center");

window.addEventListener('DOMContentLoaded', ()=>{
    let displayMenu = menu.map( (item) => {

        return `            <article class="menu-item">
        <img src=${item.img} class="photo">
        <div class="item-info">
            <header>
                <h4>${item.tittle}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p>${item.desc}</p>
        </div>
    </article>`


})
displayMenu = displayMenu.join("");
sectionCenter.innerHTML = displayMenu;
})

allBtn.addEventListener('click', ()=>{
    let displayMenu = menu.map( (item) => {
            
            return `            <article class="menu-item">
            <img src=${item.img} class="photo">
            <div class="item-info">
                <header>
                    <h4>${item.tittle}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p>${item.desc}</p>
            </div>
        </article>`
    })
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
})

cakeBtn.addEventListener('click', ()=>{
    let displayMenu = menu.map( (item) => {
        if(item.category === "Dessert"){
            return `            <article class="menu-item">
            <img src=${item.img} class="photo">
            <div class="item-info">
                <header>
                    <h4>${item.tittle}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p>${item.desc}</p>
            </div>
        </article>`
        }
    })
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
})

pastaBtn.addEventListener('click', ()=>{
    let displayMenu = menu.map( (item) => {
        if(item.category === "Pasta"){
            return `            <article class="menu-item">
            <img src=${item.img} class="photo">
            <div class="item-info">
                <header>
                    <h4>${item.tittle}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p>${item.desc}</p>
            </div>
        </article>`
        }
    })
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
})