const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


const nav = document.querySelector("#navMenu");  // nav element
const navList = document.querySelector("#navList");  // ul element inside nav
const open = document.querySelector("#hamburger");
const close = document.querySelector("#close-hamburger");
const hideCloseButton = document.querySelector("#close-hamburger");


open.addEventListener("click", () => {
    nav.classList.add("open");
    navList.classList.add("open");
    hideCloseButton.classList.add("open");
});

close.addEventListener("click", () => {
    nav.classList.remove("open");
    navList.classList.remove("open");
    hideCloseButton.classList.remove("open");
});
