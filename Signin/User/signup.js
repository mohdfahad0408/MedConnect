// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    const form = document.getElementById('signup-form');

    // 1. Password Visibility Toggle
    togglePassword.addEventListener('click', () => {
        // Check the current type of the password input
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        
        // Set the new type
        passwordInput.setAttribute('type', type);

        // Toggle the eye icon class
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // 2. Form Submission (Example)
    // This prevents the page from reloading on submit and shows an alert.
    // In a real app, you would send this data to a server.
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the default form submission

        // You can add form validation logic here
        
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        
        console.log('Form submitted with:');
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        
        alert('Account creation successful! (Demo)');
    });
});