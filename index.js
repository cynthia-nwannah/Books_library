

let burger = document.querySelector(".harmburger");
const nav = document.querySelector(".nav__links");
const navLink = document.querySelectorAll(".navb");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
//    alert("hello")
navLink.forEach((link, index) => {
    if (link.style.animation){
        link.style.animation = "" ;
    }else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
    }
})

burger.classList.toggle("toggle")
})