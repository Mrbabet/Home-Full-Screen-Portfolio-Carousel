const menuBtn = document.querySelector(".burger-btn");
const overlay = document.querySelector(".menu-overlay");
const overflow = document.querySelector("body");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("active");
    menuOpen = false;
  }
});

menuBtn.addEventListener("click", function () {
  overlay.classList.toggle("active");
  overflow.classList.toggle("active");
});
