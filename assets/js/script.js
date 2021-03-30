const bars = document.querySelector(".fa-bars");

const nav = document.querySelector(".nav-menu");

bars.addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
});