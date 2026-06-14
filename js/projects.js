const track = document.getElementById('projectsTrack');
const cards = document.querySelectorAll('.projects__card');
const dotsContainer = document.getElementById('projectsDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let current = 0;

cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('projects__dot');
    if (i === 0) dot.classList.add('projects__dot--active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
});

function goTo(index) {
    cards[current].classList.remove('projects__card--active');
    document.querySelectorAll('.projects__dot')[current].classList.remove('projects__dot--active');
    current = index;
    cards[current].classList.add('projects__card--active');
    document.querySelectorAll('.projects__dot')[current].classList.add('projects__dot--active');
    updatePosition();
}

function updatePosition() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 24;
    const trackWidth = track.parentElement.offsetWidth;
    const offset = (trackWidth / 2) - (cardWidth / 2) - (current * (cardWidth + gap));
    track.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => goTo(current === 0 ? cards.length - 1 : current - 1));
nextBtn.addEventListener('click', () => goTo(current === cards.length - 1 ? 0 : current + 1));

window.addEventListener('resize', updatePosition);

goTo(0);