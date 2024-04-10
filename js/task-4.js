'use strict';

const formLogin = document.querySelector('form.login-form');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('All form fields must be filled in');
    }

    const formData = {
        email: email.value.trim(),
        password: password.value.trim()
    };

    console.log(formData);

    event.currentTarget.reset();
});