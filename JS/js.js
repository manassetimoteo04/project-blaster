const header = document.querySelector(".header");
const btn = document.querySelector(".nav-btn");

btn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const link = document.querySelectorAll("a:link");

link.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href == "#")
      window.scrollTo({
        top: "0",
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const selec = document.querySelector(href);
      selec.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

window.addEventListener("scroll", function () {
  var body = document.querySelector("body");
  if (window.scrollY > 30) {
    body.classList.add("fixed");
  } else {
    body.classList.remove("fixed");
  }
});
