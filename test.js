

const btn = document.getElementById("theme-couleur");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    btn.textContent = "Sombre";
  } else {
    btn.textContent = "Clair";
  }
});
