document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#1565C0';
        link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
        link.style.transform = '';
    });
});

const serviceImages = document.querySelectorAll('.service img');
serviceImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = '';
    });
});
