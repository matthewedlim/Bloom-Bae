// Assuming all your DOM elements are correctly identified
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

document.getElementById("signinBtn").addEventListener("click", function() {
  // Get the values of email and password fields
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Replace these hardcoded admin credentials with your actual admin credentials
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'admin123';

  // Check if the entered credentials match the admin credentials
  if (email === adminEmail && password === adminPassword) {
      // Redirect to admin page
      window.location.href = "src/admin/admin.html";
  } else {
      alert('Invalid email or password. Please try again.');
  }
});
