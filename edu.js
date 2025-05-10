



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





// Popup (Resolution Size Warning)
const popupOverlay = document.getElementById('popup-overlay');
const continueButton = document.getElementById('popup-continue-button');
const goBackButton = document.getElementById('go-back-button');

function checkScreenWidth() {
    if (window.innerWidth < 768) {
        popupOverlay.style.display = 'block';
    } else {
        popupOverlay.style.display = 'none';
    }
}
checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);
continueButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});
goBackButton.addEventListener('click', () => {
    window.history.back(); 
});