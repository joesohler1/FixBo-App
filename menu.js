//menu.js
//Start by wearing your seatbelt. setup document.addEventListener('DOMContentLoaded')
//so that the page will load its code before performing any methods or functions.
document.addEventListener('DOMContentLoaded', () => {

    //CONSTANTS AND VARIABLES
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu-list');
    const overlay = document.querySelector('.overlay');
    const hamburgerSpans = hamburger.querySelectorAll('span');
    const mediaQuery = window.matchMedia('(max-width: 760px)');

    //FUNCTIONS SECTION
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        if (mediaQuery.matches) {
            mobileMenu.style.display = hamburger.classList.contains('open') ? 'block' : 'none';
            overlay.style.display = hamburger.classList.contains('open') ? 'block' : 'none';
    }});

    window.addEventListener('resize', () => {
        if(!mediaQuery.matches) {
            mobileMenu.style.display = 'none';
            overlay.style.display = 'none';
            hamburger.classList.remove('open');
        }
    });
});