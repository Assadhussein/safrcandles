// Example of simple JavaScript functionality:
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

const scriptURL = 'https://script.google.com/macros/s/AKfycby19IqijkMMz55nl_7_TLgTC7dsOYUm4dw2wOw9ydzMoJoSDDW7BdS6_cxFGFgKS2HJ/exec';  // Replace with your Google Apps Script Web App URL

document.getElementById('emailForm').addEventListener('submit', function (event) {
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

// Google Apps Script API URL
const scriptURL1 = 'https://script.google.com/macros/s/AKfycbwis5zZ9jl5B9aeM7n6I2eWZp3wMgHQ7sohZObSDrFWipk915rWEhu01Igl5Drbe2vc/exec';

// Reference the form element
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = new FormData(contactForm);

    // Post form data to the Google Apps Script API
    fetch(scriptURL1, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json()) // Handle JSON response
        .then(data => {
            if (data.success) {
                // Hide the form and show the thank-you message
                contactForm.classList.add('hidden');
                document.getElementById('thankYouMessage').classList.remove('hidden');
            } else {
                // Handle errors where success = false
                document.getElementById('errorMessage').classList.remove('hidden');
            }
        })
        .catch(err => {
            console.error('Error submitting form:', err);

            // Show the error message
            document.getElementById('errorMessage').classList.remove('hidden');
        });
});