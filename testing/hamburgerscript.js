// Select the hamburger button and the menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle menu visibility on button click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
