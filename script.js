document.addEventListener('DOMContentLoaded', () => {

    // 1. Contact Form AJAX Submission Handler
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';
            
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }

            const formData = new FormData(contactForm);

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

    // 2. Interactive Service Photo Sliders
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

    // 3. Header Dropdown Menu Toggle
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropBtn && dropdownContent) {
        const toggleDropdown = (event) => {
            event.stopPropagation();
            event.preventDefault();
            dropdownContent.classList.toggle('show');
        };

        dropBtn.addEventListener('click', toggleDropdown);
        dropBtn.addEventListener('touchstart', toggleDropdown, { passive: false });

        window.addEventListener('click', () => {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        });

        window.addEventListener('touchstart', (e) => {
            if (!dropBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    }

    // 4. Hero Banner Slider & Auto-play
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevHeroBtn = document.getElementById('prevSlide');
    const nextHeroBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    const slideInterval = 5000;
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

    // 5. Service Card Scroll Animations
    const cards = document.querySelectorAll('.service-card');
    if (cards.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });

        cards.forEach(card => observer.observe(card));
    }
});