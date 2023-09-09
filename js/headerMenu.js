document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navigation-toggle');
    const navbar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });
});