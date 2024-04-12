function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simple validation for name
    if (name === '') {
        alert('Please enter your name');
        return;
    }

    // Simple validation for email
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Simple validation for password
    if (password === '') {
        alert('Please enter your password');
        return;
    }

    // Form submission logic
    alert('Form submitted successfully!');
}
