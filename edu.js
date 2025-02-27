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
    