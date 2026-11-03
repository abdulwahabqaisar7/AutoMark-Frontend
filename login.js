const loginForm = document.querySelector("#login-form");
const passwordInput = document.querySelector("#login-password");
const passwordToggle = document.querySelector(".password-toggle");
const loginStatus = document.querySelector("#login-status");

passwordToggle.addEventListener("click", () => {
  const showPassword = passwordInput.type === "password";
  passwordInput.type = showPassword ? "text" : "password";
  passwordToggle.setAttribute("aria-pressed", String(showPassword));
  passwordToggle.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
});

document.querySelector("#forgot-password").addEventListener("click", () => {
  loginStatus.textContent = "Password reset is not configured in this prototype.";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginStatus.textContent = "Account sign-in is not configured in this prototype.";
});
