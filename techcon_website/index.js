window-alert('Welcome to techcon conference,feel free to interact and network all the best!');

const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Validate username
      const usernameInput = document.getElementById('fullname');
      const usernameError = document.getElementById('fullnameError');
      if (usernameInput.value.length < 3) {
        usernameError.textContent = 'Fullname must be at least 3 characters long.';
        return;
      } else {
        usernameError.textContent = '';
      }

      // Validate email
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
      } else {
        emailError.textContent = '';
      }

      // Validate password
      const passwordInput = document.getElementById('password');
      const passwordError = document.getElementById('passwordError');
      if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return;
      } else {
        passwordError.textContent = '';
      }

    


      // If all validations pass, submit the form
      form.submit();
    });

