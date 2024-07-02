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

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add class for animation on scroll
document.addEventListener('scroll', function() {
    document.querySelectorAll('section').forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
});

// Ensure sections are checked on load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section').forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
});// Animation when hovering over navigation links
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

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add class for animation on scroll
document.addEventListener('scroll', function() {
    document.querySelectorAll('section').forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
});

// Ensure sections are checked on load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section').forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
});

