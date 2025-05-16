document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  // Simple validation (Replace with real authentication in production)
  if(username === "" || password === "") {
    errorMessage.textContent = "Please enter both username and password.";
    return;
  }

  // Demo: accept user "admin" with password "1234"
  if(username === "admin" && password === "1234") {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = ("https://happybirthday44.netlify.app/"); // Or your destination page
    }, 1200);
  } else {
    errorMessage.style.color = "#d32f2f";
    errorMessage.textContent = "Invalid username or password.";
  }
});