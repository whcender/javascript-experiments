const btn = document.getElementById("btn")
const cont = document.querySelector(".container")


btn.addEventListener("click", ()=>{
    const nav = document.querySelector(".nav")
    nav.classList.toggle("show")
    btn.classList.toggle("change")
})
