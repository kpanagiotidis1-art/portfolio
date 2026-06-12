const navToggle = document.getElementById('navToggle');
const navOverlay = document.getElementById('navOverlay');

navToggle.addEventListener('click', () =>  {
    navOverlay.classList.toggle('nav__overlay--active');
    navToggle.classList.toggle('nav__toggle--active');

});

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navOverlay.classList.remove('nav__overlay--active')
    });
});