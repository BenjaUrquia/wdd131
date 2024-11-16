const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


/* New part */

const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.querySelector("nav");

hamburgerButton.addEventListener("click", () => {
    const isExpanded = hamburgerButton.getAttribute("aria-expanded") === "true";
    hamburgerButton.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("open");
});