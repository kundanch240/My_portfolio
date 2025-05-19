// Default to light mode
document.body.classList.add("light-mode");

const themeToggle = document.getElementById("toggle-theme");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
});