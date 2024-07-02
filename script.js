// Animation when hovering over navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.2s';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
        link.style.transition = 'transform 0.2s';
    });
});

// Smooth scroll to sections
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
