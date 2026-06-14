const navBtns = document.querySelectorAll('.skills__nav-button');
const panels = document.querySelectorAll('.skills__panel');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('skills__nav-button--active'));
        panels.forEach(p => p.classList.remove('skills__panel--active'));

        btn.classList.add('skills__nav-button--active');
        document.getElementById(btn.dataset.target).classList.add('skills__panel--active');
    });
});