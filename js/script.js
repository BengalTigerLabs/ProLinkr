// js/script.js

// Add event listener to all 'Explore' buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('This feature is coming soon! Stay tuned for more details.');
    });
});

// Example function to toggle more details for each service
function toggleDetails(service) {
    const details = document.getElementById(service + '-details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Call this function to simulate loading or fetching more details (placeholder)
function loadServiceDetails() {
    // Simulate a loading process with a timeout
    setTimeout(() => {
        alert('Service details loaded successfully!');
    }, 1000);
}

// You can call this function when the page loads, or attach it to an event
window.onload = function() {
    console.log("ProLinkr website loaded successfully!");
};

// js/script.js

// Function to toggle the display of more details for each step
function toggleStepDetails(stepNumber) {
    const stepDetails = document.getElementById(`step-${stepNumber}-details`);
    if (stepDetails.style.display === 'none' || stepDetails.style.display === '') {
        stepDetails.style.display = 'block';
    } else {
        stepDetails.style.display = 'none';
    }
}

// Add event listeners to the steps
document.querySelectorAll('.step h2').forEach((heading, index) => {
    heading.addEventListener('click', function() {
        toggleStepDetails(index + 1);
    });
});

// Ensure this runs after the page loads
window.onload = function() {
    console.log("ProLinkr website loaded successfully!");
};

// js/script.js

// Form validation for Sign Up page
document.querySelector('.signup-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        event.preventDefault(); // Prevent form submission
    }
});

// js/script.js

// Form validation for Login page
document.querySelector('.login-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please fill in both the email and password fields.');
        event.preventDefault(); // Prevent form submission
    }
});

