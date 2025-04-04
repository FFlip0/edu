



// Image Focus
const images = document.querySelectorAll('img'); // Select all <img> elements
const overlay = document.getElementById('overlay');
const focusedImg = document.getElementById('focusedImg');

images.forEach(img => {
    img.addEventListener('click', () => {
        focusedImg.src = img.src;
        overlay.style.display = 'flex';
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});


