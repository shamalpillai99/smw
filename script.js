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

    // 2. Contact Form AJAX Submission Handler
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stop normal page reload

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';
            
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }

            const formData = new FormData(contactForm);

            // Send data directly to FormSubmit endpoint via background fetch
            fetch('https://formsubmit.co/ajax/shamalpillai@gmail.com', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Thank you! Your message has been sent to Savusavu Motor Winders. We will get back to you shortly.');
                    contactForm.reset();
                } else {
                    alert('Oops! Something went wrong. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error. Please check your connection and try again.');
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                }
            });
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

        if (nextBtn && prevBtn && images.length > 0) {
            nextBtn.addEventListener('click', (event) => {
                event.preventDefault();
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });

            prevBtn.addEventListener('click', (event) => {
                event.preventDefault();
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

    // 5. Hero Banner Slider & Auto-play
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevHeroBtn = document.getElementById('prevSlide');
    const nextHeroBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds
    let autoSlide;

    function updateSlide(index) {
        if (slides.length === 0) return;
        
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlideFn() {
        updateSlide(currentSlide + 1);
        resetTimer();
    }

    function prevSlideFn() {
        updateSlide(currentSlide - 1);
        resetTimer();
    }

    if (nextHeroBtn) {
        nextHeroBtn.addEventListener('click', (event) => {
            event.preventDefault();
            nextSlideFn();
        });
    }

    if (prevHeroBtn) {
        prevHeroBtn.addEventListener('click', (event) => {
            event.preventDefault();
            prevSlideFn();
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function(event) {
            event.preventDefault();
            const index = parseInt(this.getAttribute('data-slide'), 10);
            updateSlide(index);
            resetTimer();
        });
    });

    function startAutoSlide() {
        autoSlide = setInterval(nextSlideFn, slideInterval);
    }

    function resetTimer() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    if (slides.length > 1) {
        startAutoSlide();
    } else if (slides.length === 1) {
        const arrowEl = document.querySelector('.slider-arrow');
        const dotsEl = document.querySelector('.slider-dots');
        if (arrowEl) arrowEl.style.display = 'none';
        if (dotsEl) dotsEl.style.display = 'none';
    }

});
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

    // 2. Contact Form AJAX Submission Handler
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stop normal page reload

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';
            
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }

            const formData = new FormData(contactForm);

            // Send data directly to FormSubmit endpoint via background fetch
            fetch('https://formsubmit.co/ajax/shamalpillai@gmail.com', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Thank you! Your message has been sent to Savusavu Motor Winders. We will get back to you shortly.');
                    contactForm.reset();
                } else {
                    alert('Oops! Something went wrong. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error. Please check your connection and try again.');
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                }
            });
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

        if (nextBtn && prevBtn && images.length > 0) {
            nextBtn.addEventListener('click', (event) => {
                event.preventDefault();
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });

            prevBtn.addEventListener('click', (event) => {
                event.preventDefault();
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

    // 5. Hero Banner Slider & Auto-play
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevHeroBtn = document.getElementById('prevSlide');
    const nextHeroBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds
    let autoSlide;

    function updateSlide(index) {
        if (slides.length === 0) return;
        
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlideFn() {
        updateSlide(currentSlide + 1);
        resetTimer();
    }

    function prevSlideFn() {
        updateSlide(currentSlide - 1);
        resetTimer();
    }

    if (nextHeroBtn) {
        nextHeroBtn.addEventListener('click', (event) => {
            event.preventDefault();
            nextSlideFn();
        });
    }

    if (prevHeroBtn) {
        prevHeroBtn.addEventListener('click', (event) => {
            event.preventDefault();
            prevSlideFn();
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function(event) {
            event.preventDefault();
            const index = parseInt(this.getAttribute('data-slide'), 10);
            updateSlide(index);
            resetTimer();
        });
    });

    function startAutoSlide() {
        autoSlide = setInterval(nextSlideFn, slideInterval);
    }

    function resetTimer() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    if (slides.length > 1) {
        startAutoSlide();
    } else if (slides.length === 1) {
        const arrowEl = document.querySelector('.slider-arrow');
        const dotsEl = document.querySelector('.slider-dots');
        if (arrowEl) arrowEl.style.display = 'none';
        if (dotsEl) dotsEl.style.display = 'none';
    }

});
