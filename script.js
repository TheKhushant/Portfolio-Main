// Navigation functionality
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Update active nav button
            updateActiveNav(sectionId);
        }

        function updateActiveNav(activeSection) {
            // Remove active class from all buttons
            document.querySelectorAll('.nav-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to current button
            const activeBtn = document.querySelector(`[data-section="${activeSection}"]`);
            if (activeBtn) {
                activeBtn.classList.add('active');
            }
        }

        // Scroll spy functionality
        function handleScroll() {
            const sections = ['home', 'education', 'experience', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        updateActiveNav(section);
                        break;
                    }
                }
            }
        }

        // view more less
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('.expandable-card').forEach(card => {
            const btn = card.querySelector('.toggle-btn');
            btn.addEventListener('click', function () {
                card.classList.toggle('expanded');
                btn.textContent = card.classList.contains('expanded') ? 'View Less' : 'View More';
            });
            });
        });

        // Contact form submission
        function handleSubmit() {
            const name = document.querySelector('input[placeholder="Your Name"]').value;
            const email = document.querySelector('input[placeholder="Your Email"]').value;
            const message = document.querySelector('textarea[placeholder="Your Message"]').value;
            
            if (name && email && message) {
                alert('Thank you for your message! I will get back to you soon.');
                // Reset form
                document.querySelector('input[placeholder="Your Name"]').value = '';
                document.querySelector('input[placeholder="Your Email"]').value = '';
                document.querySelector('textarea[placeholder="Your Message"]').value = '';
            } else {
                alert('Please fill in all fields.');
            }
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Smooth animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.glass-card, .experience-item, .project-item, .education-card');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });