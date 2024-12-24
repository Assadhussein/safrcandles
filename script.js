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

// Example button click event
const learnMoreBtn = document.getElementById('learn-more-btn');
learnMoreBtn.addEventListener('click', () => {
  const workSection = document.getElementById('work');
  if (workSection) {
    window.scrollTo({
      top: workSection.offsetTop - 80,
      behavior: 'smooth'
    });
  }
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