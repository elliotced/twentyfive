let button = document.querySelector(".menu-button");
button.addEventListener("click",showMenu);

let layer = document.querySelector(".fade-layer");
layer.addEventListener("click",showMenu);

function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    layer.classList.toggle("visible");
}