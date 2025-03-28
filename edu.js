



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



/*
//Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeKey = 'theme'; 

    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme === 'dark') {
    body.classList.add('root2');
    }

    function toggleTheme() {
    body.classList.toggle('root2');
    localStorage.setItem(themeKey, body.classList.contains('root2') ? 'dark' : 'light'); 
    }

    themeToggle.addEventListener('click', toggleTheme);
    





*/