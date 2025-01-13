// Example of simple JavaScript functionality:
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // adjust for fixed nav height
        behavior: 'smooth'
      });
    }
  });
});



const scriptURL = 'https://script.google.com/macros/s/AKfycby19IqijkMMz55nl_7_TLgTC7dsOYUm4dw2wOw9ydzMoJoSDDW7BdS6_cxFGFgKS2HJ/exec';  // Replace with your Google Apps Script Web App URL

document.getElementById('emailForm').addEventListener('submit', function(event) {
event.preventDefault();

const email = document.getElementById('emailInput').value;

fetch(scriptURL, {
method: 'POST',
mode: 'cors',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
},
body: new URLSearchParams({
'email': email  // This key matches what is expected in your Apps Script
})
})
.then(response => {
if (response.ok) {
alert('Thank you for subscribing!');
} else {
alert('Something went wrong. Please try again later.');
}
})
.catch(error => alert('Error: ' + error.message));

// Optionally, clear the input field
document.getElementById('emailInput').value = '';
});

// Select elements
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-links.nav-mobile');

// On click, toggle the single mobile nav
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop the default form submission

  const formData = new FormData(contactForm);

  fetch('https://script.google.com/macros/s/AKfycbwis5zZ9jl5B9aeM7n6I2eWZp3wMgHQ7sohZObSDrFWipk915rWEhu01Igl5Drbe2vc/exec', {
    method: 'POST',
    body: formData, // Send the form data
  })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      if (data.success) {
        // Hide the form and show thank-you message
        contactForm.classList.add('hidden');
        const thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.classList.remove('hidden');
      } else {
        // Handle errors where success = false
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(err => {
      console.error('Form submission error:', err);

      // Optionally show an error message to the user
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.classList.remove('hidden');
    });
});