const menuButton = document.querySelectorAll('.burger-menu');

const activeBurger = () => {
    menuButton.classList.toggle('active');
    menuButton.classList.contains('active') ? document.style.overflow = 'hidden': document.body.style.overflow = 'auto';
}

menuButton.addEventListener('click', activeBurger);