/* mobile menu, burger menu */

const burgerIcon = document.querySelector('.burger-icon');
const headerNav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.header-nav a');

if (burgerIcon && headerNav) {
   
    burgerIcon.addEventListener('click', () => {
        headerNav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerNav.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!headerNav.contains(event.target) && !burgerIcon.contains(event.target)) {
            headerNav.classList.remove('active');
        }
    });
}
