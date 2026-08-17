// Wait for the page to fully load before running the code
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle Feature
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (event) => {
            event.preventDefault();
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
            nextBtn.addEventListener('click', (event) => {
                event.preventDefault(); // Prevents page jumping
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });

            prevBtn.addEventListener('click', (event) => {
                event.preventDefault(); // Prevents page jumping
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
            event.preventDefault();
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

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    const slideInterval = 5000; // Time in ms (5 seconds)
    let autoSlide;

    // Function to update the active slide
    function updateSlide(index) {
        // 1. Deactivate current slide and dot
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // 2. Update index
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        // 3. Activate new slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Function to go to next slide
    function nextSlideFn() {
        updateSlide(currentSlide + 1);
        resetTimer(); // Reset timer on manual interaction
    }

    // Function to go to previous slide
    function prevSlideFn() {
        updateSlide(currentSlide - 1);
        resetTimer(); // Reset timer on manual interaction
    }

    // --- Event Listeners with preventDefault ---
    if (nextBtn) {
        nextBtn.addEventListener('click', (event) => {
            event.preventDefault();
            nextSlideFn();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (event) => {
            event.preventDefault();
            prevSlideFn();
        });
    }

    // Dots navigation
    dots.forEach(dot => {
        dot.addEventListener('click', function(event) {
            event.preventDefault();
            const index = parseInt(this.getAttribute('data-slide'));
            updateSlide(index);
            resetTimer(); // Reset timer on manual interaction
        });
    });

    // --- Auto-play functionality ---
    function startAutoSlide() {
        autoSlide = setInterval(nextSlideFn, slideInterval);
    }

    function resetTimer() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    // Start the slider
    if (slides.length > 1) {
        startAutoSlide();
    } else {
        // Hide arrows/dots if only one slide
        const arrowEl = document.querySelector('.slider-arrow');
        const dotsEl = document.querySelector('.slider-dots');
        if (arrowEl) arrowEl.style.display = 'none';
        if (dotsEl) dotsEl.style.display = 'none';
    }
});
