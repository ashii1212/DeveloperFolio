// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // Sticky Navigation
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.padding = '1rem 0';
        }
    });
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
    
    // EmailJS Integration
    (function() {
        emailjs.init("bXIq3qNTog3Q3EHG8"); // Your public key
    })();

    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();

       btn.value = 'Sending...';

       const serviceID = 'service_etezmzn';
       const templateID = 'template_hsoll74';

       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Message';
          alert('Your message has been sent successfully! I will get back to you soon.');
          document.getElementById('form').reset();
        }, (err) => {
          btn.value = 'Send Message';
          alert('Sorry, there was an error sending your message. Please try again later.');
          console.error('EmailJS Error:', err);
        });
    });
    
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.skill-category, .project-card, .achievement-card');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeObserver.observe(el);
    });
});
