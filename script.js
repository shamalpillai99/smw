// Wait for the page to fully load before running the code
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle Feature
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Contact Form Submission Confirmation Feature
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            alert('Thank you! Your message has been sent to Savusavu Motor Winders. We will get back to you shortly.');
        });
    }

    // 3. Interactive Service Photo Sliders
    document.querySelectorAll('.card-image-container').forEach(container => {
        const images = container.querySelectorAll('.service-slider-img');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });
        }
    });

    // 4. Top Left Dropdown Menu Toggle
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropBtn && dropdownContent) {
        dropBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdownContent.classList.toggle('show');
        });

        // Close dropdown if user clicks anywhere else on the page
        window.addEventListener('click', () => {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        });
    }

});