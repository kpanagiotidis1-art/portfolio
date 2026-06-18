document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
        
        e.preventDefault();
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');
        
        setTimeout(() => {
            window.location.href = href;
        }, 400);
    });
});