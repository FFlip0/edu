//Theme Toggle New
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
    

// ------------------------------------------------------------------------------- //



    const images = document.querySelectorAll('img'); // Selects all img tags
    const overlay = document.getElementById('overlay');
    const focusedImg = document.getElementById('focusedImg');

    images.forEach(img => {
    img.addEventListener('click', () => {
        focusedImg.src = img.src;
        overlay.style.display = 'flex'; // Show the overlay
    });
    });

    overlay.addEventListener('click', () => {
    overlay.style.display = 'none'; // Hide the overlay when clicked
    });