const nav1 = document.querySelector(".nav");
const nav2 = document.querySelector(".nav2");

const lupa = document.querySelector(".lupa");
const xis = document.querySelector(".xis");

lupa.addEventListener("click", () => {
  nav1.classList.toggle("on");
  nav2.classList.toggle("on");
});

xis.addEventListener("click", () => {
  nav1.classList.toggle("on");
  nav2.classList.toggle("on");
});
