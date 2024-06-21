document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ff0';
        });

        link.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });
});
