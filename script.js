document.addEventListener('DOMContentLoaded', () => {

    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Vérifie que les éléments existent
    if (burgerMenu && navLinks) {

        burgerMenu.addEventListener('click', () => {

            if (navLinks.style.display === 'flex') {

                navLinks.style.display = 'none';

            } else {

                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '20px 0';
                navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
            }
        });

        const links = document.querySelectorAll('.nav-links a');

        links.forEach(link => {

            link.addEventListener('click', () => {

                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }

            });
        });
    }
});