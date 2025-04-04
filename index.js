// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    const navLinks = document.querySelectorAll('.nav-item a');
    const menuOverlay = document.createElement('div');
    
    // Create overlay element
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);
    
    // Toggle menu function
    function toggleMenu() {
        menuItems.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }
    
    // Mobile menu toggle click event
    mobileMenuToggle.addEventListener('click', toggleMenu);
    
    // Overlay click event
    menuOverlay.addEventListener('click', toggleMenu);
    
    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if mobile menu is open
            if (menuItems.classList.contains('active')) {
                toggleMenu();
            }
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});