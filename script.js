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
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyZQ9Se2W9tniUHE-Xe7uNxtCbnWbpoxRVaJEkbZ8-GJDlLMdxxyfm-hWapo6UlH8fp/exec';
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

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed"); // Debugging

  const banner = document.getElementById("announcement-banner");
  const bannerMessage = document.getElementById("banner-message");

  if (!banner || !bannerMessage) {
      console.error("Banner or message element not found!");
      return; // Stop execution if elements are missing
  }

  // Messages with optional links
  const messages = [
    { text: "Use code SAFR10 to get 10% off on any 7oz candle order. <a href='catalogue.html'>Shop now!</a>" },
    { text: "Get any three 3oz tins for $33. <a href='catalogue.html'>Shop now!</a>" },
    { text: "Free shipping on orders over $120. <a href='catalogue.html'>Shop now!</a>" }
];

  let messageIndex = 0;

  // Wait 1 second after full page load before displaying banner
  setTimeout(() => {
      console.log("Showing banner...");
      banner.classList.add("show");
      bannerMessage.innerHTML = messages[messageIndex].text;

      // Start message slideshow every 5 seconds
      setInterval(() => {
          messageIndex = (messageIndex + 1) % messages.length;
          console.log("Changing banner message to:", messages[messageIndex].text);
          bannerMessage.innerHTML = messages[messageIndex].text;
      }, 5000);

  }, 1000);
});