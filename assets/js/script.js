const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

try {
  const slider = document.querySelector("#slider");
  function moveNext() {
    slider.scrollLeft += slider.offsetWidth;
  }
  function movePrev() {
    slider.scrollLeft -= slider.offsetWidth;
  }
} catch (err) {
  console.log(err);
}
