/*document.addEventListener('DOMContentLoaded', function() {
const form =
document.querySelector('form');
const inputFields = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

   inputFields.forEach(inputField => {
    inputField.addEventListener('blur', function() {
      if (inputField.Value.trim() === '') {
        displayErrorMessage(inputField, 'Field cannot be empty');
      } else {
        removeErrorMessage(inputField);
      }
    })
   });
   function displayErrorMessage(inputField, message)
   { let errorSpan = inputField.nextElementSibling;
       if (!errorSpan || errorSpan.className !== 'error-message')
    {
        errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';

    inputField.parentNode.insertBefore(errorSpan, inputField.nextElementSibling);
    }
      errorSpan.textContent = message;
      errorSpan.style.color = 'red';}

     function removeErrorMessage*/

     document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signUpForm');

    form.addEventListener('submit', function(event) {
        console.log(event)
    event.preventDefault();

    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(errorElement) {
        errorElement.textContent = '';
    });
  
         const name = form.elements['name'].value.trim();
         const email = form.elements['email'].value.trim();
         const password = form.elements['password'].value;
         const confirmPassword = form.elements['confirmPassword'].value;

            let isValid = true;

            if (!name) {
        document.getElementById('nameError').textContent = 'Name field cannot be empty';
            isValid = false;
            }

            if (!email) {
                document.getElementById('emailError').textContent = 'Email field cannot be empty';
                    isValid = false;
                    }

                    if (!password) {
                        document.getElementById('passwordError').textContent = 'Password field cannot be empty';
                            isValid = false;
                            }

                            if (!confirmPassword) {
                                document.getElementById('confirmPasswordError').textContent = 'Please confirm password';
                                    isValid = false;
                                    }
 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
           isValid = false;
       }
        
       if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be atleast 6 characters';
           isValid = false;
       }

       if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
           isValid = false;
       }
    });
});

    /*var value1 = document.getElementById('name').value;
    var value2 = document.getElementById('email').value;
    var value3 = document.getElementById('password').value;
    var value4 = document.getElementById('confirmPassword').value;

    if (value1.trim() === '' || value2.trim() === '' || value3.trim() === '' || value4.trim() === '') 
    {
      document.getElementById('errorMessage').textContent = 'Field cannot be empty'; } else {
        document.getElementById('errorMessage').textContent = '';
      }
    });*/
