// Animation when hovering over navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.2s';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
        link
