/* Form validation (Contact Us) */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(event) {
        let valid = true;

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const birthdateError = document.getElementById('birthdate-error');
        const passwordError = document.getElementById('password-error');
        const postalcodeError = document.getElementById('postalcode-error');
        const phoneError = document.getElementById('phone-error');
        const subjectError = document.getElementById('subject-error');
        const messageError = document.getElementById('message-error');
        const privacyError = document.getElementById('privacy-error');


        nameError.textContent = '';
        emailError.textContent = '';
        birthdateError.textContent = '';
        passwordError.textContent = '';
        postalcodeError.textContent = '';
        phoneError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
        privacyError.textContent = '';

        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const birthdate = form.querySelector('#birthdate').value.trim();
        const password = form.querySelector('#password').value.trim();
        const postalcode = form.querySelector('#postalcode').value.trim();
        const phone = form.querySelector('#phone').value.trim();
        const subject = form.querySelector('#subject').value.trim();
        const message = form.querySelector('#message').value.trim();
        const privacyChecked = form.querySelector('#privacy').checked;


        const namePattern = /^[A-Za-z\s\-]+$/;
        if (!namePattern.test(name)) {
            nameError.textContent = 'Full name can only contain letters, spaces, and hyphens';
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            valid = false;
        }

        const birthdatePattern = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!birthdatePattern.test(birthdate)) {
            birthdateError.textContent = 'Date of birth must be in the format DD/MM/YYYY';
            valid = false;
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(password)) {
            passwordError.textContent = 'Password must be at least 8 characters long, include at least one uppercase letter and one digit';
            valid = false;
        }


        const postalcodePattern = /^\d{1,6}$/;
        if (!postalcodePattern.test(postalcode)) {
            postalcodeError.textContent = 'Postal code can only contain up to 6 digits';
            valid = false;
        }

        const phonePattern = /^[0-9\s\-\+\(\)]+$/;
        if (!phonePattern.test(phone)) {
            phoneError.textContent = 'Please enter a valid phone number';
            valid = false;
        }


        if (subject === '') {
            subjectError.textContent = 'Please select a subject';
            valid = false;
        }


        if (message === '') {
            messageError.textContent = 'Message is required';
            valid = false;
        }

        if (!privacyChecked) {
            privacyError.textContent = 'You must agree to the Privacy Policy';
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});

