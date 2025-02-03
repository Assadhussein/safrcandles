// Select elements
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.nav-links.nav-mobile');

    console.log('Hamburger:', hamburger);
    console.log('MobileNav:', mobileNav);

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('show');
        });
    } else {
        console.warn('Hamburger menu or mobile nav not found on this page.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbywCmU1Kiz1ZJPZwi9qXJxpMw2pWgJeB7wtkMMViSA1AJdQPNeIRZtWH5jSQvw8RsPY/exec';
    const API_URL = 'https://script.google.com/macros/s/AKfycbwis5zZ9jl5B9aeM7n6I2eWZp3wMgHQ7sohZObSDrFWipk915rWEhu01Igl5Drbe2vc/exec';
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Subscription Form
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
      emailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('emailInput').value;
  
        fetch(scriptURL, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ email }),
        })
          .then(response => {
            if (response.ok) {
              alert('Thank you for subscribing!');
              emailForm.reset();
            } else {
              alert('Something went wrong. Please try again later.');
            }
          })
          .catch(error => alert('Error: ' + error.message));
      });
    }
  
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
  
        fetch(API_URL, {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              contactForm.style.display = 'none';
              thankYouMessage.classList.remove('hidden');
            } else {
              alert('Something went wrong. Please try again.');
            }
          })
          .catch(err => {
            console.error('Error:', err);
            alert('Oops! Something went wrong. Please check your connection and try again.');
          });
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const mobileCollectionMenu = document.querySelector(".mobile-collection-menu");
    const mobileDropdownMenu = document.querySelector(".mobile-dropdown-menu");

    if (mobileCollectionMenu && mobileDropdownMenu) {
        mobileCollectionMenu.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            mobileDropdownMenu.classList.toggle("show"); // Toggle dropdown visibility
        });
    }
});