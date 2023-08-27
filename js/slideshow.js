const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const positionIndicator = document.querySelector('.position-indicator');

let currentImageIndex = 0;

function updatePositionIndicator() {
    positionIndicator.innerHTML = `<span>Ảnh ${currentImageIndex + 1} / ${images.length}</span>`;
}

function showImage(index) {
    images.forEach((image, idx) => {
        if (idx === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
    currentImageIndex = index;
    updatePositionIndicator();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function autoSlide() {
    showNextImage();
    setTimeout(autoSlide, 4000); 
}

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

nextBtn.addEventListener('click', showNextImage);

showImage(currentImageIndex);
autoSlide();
