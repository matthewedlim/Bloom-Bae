let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let fnameField = document.getElementById('fnameField');
let lnameField = document.getElementById('lnameField');
let address = document.getElementById('address');
let title = document.getElementById('title');
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let isSignUp = true;

signinBtn.onclick = function () {
  // Check if we're already in the sign-up area
  if (isSignUp) {
    // Trigger animation for sign-in only if not already in sign-in area
    fnameField.style.maxHeight = '0';
    lnameField.style.maxHeight = '0';
    address.style.maxHeight = '0';
    title.innerHTML = 'Sign in';
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
    isSignUp = false;
  }
};

signupBtn.onclick = function () {
  // Trigger animation for sign-up
  fnameField.style.maxHeight = '65px';
  lnameField.style.maxHeight = '65px';
  address.style.maxHeight = '65px';
  title.innerHTML = 'Sign up';
  signupBtn.classList.remove('disable');
  signinBtn.classList.add('disable');
  isSignUp = true;
};

document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to the login button
  document.getElementById("signinBtn").addEventListener("click", function() {
    // Check if we're in the sign-up area
    if (!isSignUp) {
      // Get the values of email and password fields
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      // If email or password is empty, do nothing
      if (!email || !password) {
        return;
      }

      // Call the validateAdmin function with the provided credentials
      validateAdmin(email, password);
    }
  });
});

function validateAdmin(email, password) {
  // Replace these hardcoded admin credentials with your actual admin credentials
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'admin123';

  // Check if the entered credentials match the admin credentials
  if (email === adminEmail && password === adminPassword) {
      // Redirect to admin page
      window.location.href = "admin.html";
  } else {
      alert('Invalid email or password. Please try again.');
  }
}


