function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}
function toggleDropdown(event) {
  event.stopPropagation();
  const dropdown = event.currentTarget.parentElement;
  dropdown.classList.toggle("open");
}

/* Close dropdown when clicking outside */
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown.open").forEach(d => {
    d.classList.remove("open");
  });
});

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  document.querySelector(".hero-bg").style.transform =
    `scale(1.05) translateY(${scrolled * 0.15}px)`;
});

