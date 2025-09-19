// ================== Part 1: Event Handling ==================

// Select elements
const btn = document.getElementById("clickBtn");
const msg = document.getElementById("message");

// Button click event
btn.addEventListener("click", () => {
  msg.textContent = "You clicked the button!";
});

// Mouseover event
btn.addEventListener("mouseover", () => {
  msg.textContent = "You hovered over the button!";
});

// ================== Part 2: Interactive Elements ==================

// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature
let count = 0;
const counterEl = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  counterEl.textContent = count;
});

// ================== Part 3: Form Validation ==================

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form submission
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required!";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Invalid email!";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters!";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("successMsg").textContent = "Form submitted successfully!";
  }
});
