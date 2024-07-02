document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow');

    slideshows.forEach(slideshow => {
        let images = slideshow.querySelectorAll('img');
        let currentIndex = 0;

        images[currentIndex].style.display = 'block';

        setInterval(() => {
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.display = 'block';
        }, 3000);
    });
});
